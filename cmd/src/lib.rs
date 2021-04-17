use std::convert::TryFrom;
use std::time::Duration;

use tokio::process::Child;
use tokio::process::Command;

use sysinfo::{ProcessExt, System, SystemExt};

const CPU_VOLTAGE: f32 = 1.2;
const AMP_MAX: f32 = 0.98;

async fn watch_process(
    pid: i32,
    mut child: Child,
    mut interval: tokio::time::Interval,
) -> Result<Vec<f32>, String> {
    let mut system = System::new_all();
    let mut measurements = Vec::new();

    loop {
        // Check if the process has terminated.
        match child.try_wait() {
            Ok(Some(_)) => return Ok(measurements),
            Err(e) => return Err(e.to_string()),
            Ok(None) => (),
        }

        system.refresh_all();
        match system.get_process(pid) {
            None => return Err(format!("cound't get process with pid: ({})", pid)),
            Some(process) => measurements.push(process.cpu_usage()),
        }
        interval.tick().await;
    }
}

pub fn calculate_energy(measurements: &[f32], poll_interval: Duration) -> f32 {
    let poll_interval = poll_interval.as_secs_f32();
    measurements
        .iter()
        .map(|m| (m / 100f32) * CPU_VOLTAGE * AMP_MAX)
        .map(|watts| watts * (poll_interval as f32))
        .sum()
}

pub async fn estimate_energy(args: &[String]) -> Result<f32, Box<dyn std::error::Error>> {
    let child = Command::new(&args[1]).args(&args[2..]).spawn()?;

    let poll_interval = Duration::from_millis(1);

    let pid = child.id().ok_or("child process completed too quickly")?;
    let measurements = watch_process(
        i32::try_from(pid)?,
        child,
        tokio::time::interval(poll_interval),
    )
    .await?;

    Ok(calculate_energy(&measurements, poll_interval))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calculate_energy() {
        let measurements = vec![400f32];
        let interval = Duration::from_secs(1);
        assert_eq!(
            calculate_energy(&measurements, interval).round(),
            4.704f32.round()
        )
    }
}
