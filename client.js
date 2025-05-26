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
    
    // player name 3 character max
    conn.write("Name: ACE");

    // movement commands (commented out for cleanup)
    // conn.write("Move: up");
    
  });

  // Event: incoming data from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = { connect };
