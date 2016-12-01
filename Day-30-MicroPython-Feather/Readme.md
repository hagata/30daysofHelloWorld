# Micropython project
### Si7021 Tempature and Humidity Sensor with Feather Huzzah
Basic implementation to read data from the Si7021 sensor. Many thanks to this Gist, [Micropy Si7021 module](https://gist.github.com/minyk/7c3070bc1c2766633b8ff1d4d51089cf), by minyk 🙌🙇

Resources:
- [Adafruit Feather HUZZAH ESP8266](https://www.adafruit.com/product/2821)
- [Adafruit Si7021 Temperature & Humidity Sensor Breakout Board](https://www.adafruit.com/product/3251)
- [How to load Micropython on a board](https://learn.adafruit.com/micropython-basics-how-to-load-micropython-on-a-board/esp8266)
- [How to load files: AMPY](https://learn.adafruit.com/micropython-basics-load-files-and-run-code)
- [MicroPython I2C Devices Tutorial](https://learn.adafruit.com/micropython-hardware-i2c-devices/overview)
- [Hexidecimal -> Decimal converter](http://www.binaryhexconverter.com/hex-to-decimal-converter)
- [Micropython file system documentation](http://docs.micropython.org/en/v1.8.2/esp8266/esp8266/tutorial/filesystem.html)


Outputs the following to the `screen` REPL when running.
```
temp: 24°C, humidity: 36%
temp: 24°C, humidity: 36%
temp: 24°C, humidity: 37%
temp: 24°C, humidity: 37%
temp: 24°C, humidity: 36%
temp: 24°C, humidity: 37%
temp: 24°C, humidity: 37%
temp: 24°C, humidity: 36%
```
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

### MicroPython file system
In case you break something and Ampy doesn't work. Or, if you're interested in working with the file system from the REPL.
On the REPL, `screen /dev/tty.SLAB_USBtoUART 115200`
- first: import os
    ```
    import os
    ```
- list files
    ```
    os.listdir()
    ```
- Remove files (like the ones that are breaking things)
    ```
    os.remove('filename.py')
    ```