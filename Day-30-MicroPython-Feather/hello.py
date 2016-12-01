import machine
import time

print('Hello world! I can count:')
i = 1

# Set an Led pin on Pin 15
led = machine.Pin(15, machine.Pin.OUT)
# Similar to Arduino loop() function. A forever loop.
while True:
    led.high()
    print("light on")
    time.sleep(0.5)  # Delay for 1 second
    led.low()
    print("light off")
    time.sleep(0.5)  # Delay for 1 second