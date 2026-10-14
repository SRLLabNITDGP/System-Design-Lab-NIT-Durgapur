# Smart Ring V1 — IMU Gesture Dataset

The Smart Ring project contains **179 CSV recordings** organised by gesture and recording session.

## Classes

| Gesture | Files |
|---|---:|
| `click` | 51 |
| `double_click` | 29 |
| `idle` | 18 |
| `swipe_up` | 18 |
| `swipe_down` | 27 |
| `swipe_left` | 18 |
| `swipe_right` | 18 |
| **Total** | **179** |

## CSV fields

- `t_ms`
- `Accel_X`, `Accel_Y`, `Accel_Z`
- `Gyro_X`, `Gyro_Y`, `Gyro_Z`
- `label`
- `session_id`

## Original organisation

```text
IMU_Gesture_Data/
├── click/
├── double_click/
├── idle/
├── swipe_up/
├── swipe_down/
├── swipe_left/
└── swipe_right/
```

Each class contains one or more session folders with `sampleN.csv` recordings.
