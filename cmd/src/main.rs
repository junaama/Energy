#[tokio::main]
async fn main() {
    let args: Vec<_> = std::env::args().collect();

    if args.len() < 2 {
        println!(
            r#"
usage: energy <utility>
"#
        );
        std::process::exit(1)
    }

    match energy::estimate_energy(&args).await {
        Ok(j) => {
            println!("⚡️ {} mJ", j * 1000f32);
            std::process::exit(0)
        }
        Err(e) => {
            eprintln!("🚨 energy error: ({})", e);
            std::process::exit(1)
        }
    }
}
