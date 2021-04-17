# Script for cross compiling and copying energy binary to the
# raspberry pi. In order to run this successfully you'll need to have
# an appropriate linker and the ARM rust toolchain installed. I
# followed this tutorial to do that:
#
# https://pixelspark.nl/2020/cross-compiling-rust-programs-for-a-raspberry-pi-from-macos

cargo build --target=arm-unknown-linux-musleabi --release
scp target/arm-unknown-linux-musleabi/release/energy pi@192.168.1.12:
