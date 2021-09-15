# Geodesic Nodejs Server

This is a basic Express server with websocket integration. This is designed to interface with the [controller frontend](https://github.com/Bowbee/GeoNodeFrontend).

The data is logged out by the server (but can be echoed back with a little extra effort).

## How to use

1. Clone the repo.
2. run `yarn install` from the command line.
3. run `yarn start` from the command line.

Any received data is logged out to the console.

---

#### Note:

Connecting to the **on your network** IP from another device will not work, as the websocket port is not forwarded by default. Using ngrok for testing on other devices is recommended.

To use Ngrok:
1. Visit the [download page](https://ngrok.com/download)
2. Copy ngrok.exe to wherever you want. (I have mine at `C:\ngrok` for easy command line access).
3. From the command line navigate to the extracted folder
4. Run `ngrok.exe http 3002` - last number being the port websocket is listening to.
5. Copy your ngrok URL, paste in the frontend config. `src/config.js` No port required.
