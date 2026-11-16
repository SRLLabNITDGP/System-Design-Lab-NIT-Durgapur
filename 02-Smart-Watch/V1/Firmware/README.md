# Smart Watch V1 — Firmware Package

This folder contains the clean source package for the seven-screen Smart Watch V1 firmware.

- **Archive:** [smartwatch_7screen_v9UI-source.tar.xz](smartwatch_7screen_v9UI-source.tar.xz)
- **Board target:** ESP32-S3-Touch-AMOLED-2.06
- **Framework:** ESP-IDF with LVGL 9.x and the Waveshare board support package
- **Screens:** Home, Clock, IMU, Recorder, Player, IMU Logger and Motion Classifier

The archive preserves the firmware source and required project configuration. Generated `build/` and `managed_components/` directories, local `sdkconfig`, and IDE settings were excluded. ESP-IDF Component Manager can recreate managed dependencies from the manifests and `dependencies.lock`.

After downloading and extracting the archive, open the extracted `smartwatch_7screen_v9UI/` directory in an ESP-IDF terminal and run:

```bash
idf.py set-target esp32s3
idf.py build
idf.py -p <PORT> flash monitor
```

The package has not been independently compiled or hardware-tested during this repository import.
