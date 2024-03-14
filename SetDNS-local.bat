REM # 设置 dns 地址为 10.1.2.3 
netsh interface ip set dns name="wlan" source=static addr=8.8.8.8 register=primary
REM # 将原来本地的 dns 地址也添加上 
netsh interface ip add dns name="wlan" addr=223.5.5.5
pause