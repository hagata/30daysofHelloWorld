
## Setup
Things it took forever to find.

### Installing MicroPython on the Feather Huzzah
This guide, and video was helpful, [How to load Micropython on a board](https://learn.adafruit.com/micropython-basics-how-to-load-micropython-on-a-board/esp8266)

- Get list of USB port items to find the correct port the Feather is plugged in to.
    ```
    ls /dev/tty.*
    ```
- Erase Flash
    ```
    esptool.py --port /dev/tty.SLAB_USBtoUART erase_flash
    ```
- Install MicroPython `.bin` firmware file
    ```
    esptool.py --port /dev/tty.SLAB_USBtoUART --baud 460800 write_flash --flash_size=detect 0 Desktop/esp8266-20161110-v1.8.6.bin
    ```
- Connect to the controller with `Screen` Interactive shell/REPL. Remembering to pass the Baud rate of `115200`
    ```
        screen /dev/tty.SLAB_USBtoUART 115200
    ```
- Exiting the REPL can be tricky (different than usual). Use `ctrl + a` then  type `:quit` to exit. Similar to VIM.


### Working with AMPY
Install AMPY following the guide, [https://learn.adafruit.com/micropython-basics-load-files-and-run-code/overview](https://learn.adafruit.com/micropython-basics-load-files-and-run-code/overview)

- Set the AMPY port variable as an environmental variable to avoid having to type it every time. Optionally, add this to .bashprofile/.zshrc etc.
    ```
    export AMPY_PORT=/dev/tty.SLAB_USBtoUART
    ```