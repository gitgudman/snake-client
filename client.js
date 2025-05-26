const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // Replace with actual IP if different
    port: 50541        // Replace with actual port if different
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event: successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to Play server!");
    
    // send name to server
    conn.write("Name: ACE"); // Replace 'ACE' with your preferred 3-char ID
  });

  // Event: incoming data from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = { connect };
