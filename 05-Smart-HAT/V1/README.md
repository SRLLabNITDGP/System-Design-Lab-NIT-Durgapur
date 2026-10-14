# HAT IMU Mouse System — V1

Head-motion controlled BLE mouse system using **ESP32-S3**, **BNO085 IMU** and a state-driven interaction engine.

## Prototype

![HAT V1 prototype](Images/HAT-V1-Prototype.jpg)

*HAT V1 cap prototype with the sensing and embedded electronics mounted on the brim.*

## Capabilities

- Cursor movement
- Left click
- Right click
- Double click
- Drag mode
- Scroll mode
- Quaternion-based orientation tracking
- EMA filtering
- Nonlinear cursor gain
- Gesture arbitration using a deterministic state machine

## Hardware

- ESP32-S3
- BNO085 IMU
- RGB status LED
- Cap/headband mounting platform

## Software

- Arduino IDE
- ESP32 Arduino Core 2.0.17
- Adafruit BNO08x
- Adafruit BusIO
- ESP32-BLE-Mouse

## Files in the original V1 source package

- `clicks_scroll_drag_modular03.ino` — embedded BLE mouse and gesture engine
- `Recorder_27_03c.py` — desktop recorder and visualisation utility
- `hatDATA.zip` — recorded HAT interaction data grouped by participant and gesture

## Dataset classes

- CLICK_DRAG
- DOUBLE_LEFT
- LEFT_CLICK
- RIGHT_CLICK
- SCROLLDOWN
- SCROLLUP

## Processing pipeline

`IMU Quaternion Data → Euler Angle Conversion → EMA Filtering → Motion Derivatives → State Machine Arbitration → Gesture Recognition → BLE HID Output`

## Interaction states

- `STATE_POINTER`
- `STATE_CLICK_PENDING`
- `STATE_DRAG_CANDIDATE`
- `STATE_DRAG`
- `STATE_SCROLL_PREENTRY`
- `STATE_SCROLL`

## Core methods

- Quaternion-based orientation tracking
- Euler-angle extraction
- EMA filtering
- Angular-delta motion estimation
- Euler wraparound compensation
- Deadzone suppression
- Sigmoid cursor gain
- Residual motion accumulation
- Neutral pitch tracking
- Gesture latching and arbitration
- Cursor locking during interaction transitions
- BLE connection recovery
- Emergency stop/resume through serial commands

## Setup summary

1. Install Arduino IDE.
2. Install **ESP32 by Espressif Systems**, version **2.0.17**.
3. Select **ESP32S3 Dev Module**.
4. Install `Adafruit BNO08x` and `Adafruit BusIO`.
5. Install the ESP32-BLE-Mouse library.
6. Upload the firmware to the ESP32-S3.
7. Pair the device named **IMU-HAT** as a Bluetooth mouse.
8. Mount the BNO085 securely on the cap/headband.

## Notes

This is an experimental head-assisted interaction platform. Thresholds, timing constants and mounting orientation may need tuning for different users and experimental conditions.
