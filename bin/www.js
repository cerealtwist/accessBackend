/**
 * Module dependencies.
 */
import http from "http";
import app from "../app.js";
import debugLib from "debug";
import { url, port as pt } from "../config/app.config.js";

/**
 * Setup debug
 */
const debug = debugLib("access-backend:server");

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(pt || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on ${url}`));
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 *
 * @param {string} val
 * @returns {number|string|boolean}
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 *
 * @param {Error} error
 * @returns {void}
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 *
 * @returns {void}
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

  debug("Listening on " + bind);
}

// Path: bin\www.js
