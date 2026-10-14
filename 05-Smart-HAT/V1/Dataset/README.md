# HAT V1 Dataset

The uploaded `hatDATA.zip` contains head-gesture interaction recordings organised by participant.

## Participants

The archive contains folders for multiple participants (`P1`, `P2`, `P3`, `P4`, `P5`, ...).

## Interaction classes

- `CLICK_DRAG`
- `DOUBLE_LEFT`
- `LEFT_CLICK`
- `RIGHT_CLICK`
- `SCROLLDOWN`
- `SCROLLUP`

## File format

Recordings are stored as CSV files. The desktop recorder uses columns covering accelerometer, gyroscope, magnetometer, quaternion and timestamp information.

Typical signal fields include:

- `ax`, `ay`, `az`
- `gx`, `gy`, `gz`
- `mx`, `my`, `mz`
- `qi`, `qj`, `qk`, `qw`
- `sensor_ms`

The source archive contains more than 200 entries including participant folders and recorded CSV sessions.

## Source package

The original uploaded V1 package also contains:

- `Recorder_27_03c.py`
- `clicks_scroll_drag_modular03.ino`
- `hatDATA.zip`
