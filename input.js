// Stores the active TCP connection object
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  // Say messages
  if (key === "1") {
    connection.write("Say: SUUUUUUUUU");
  }
  if (key === "2") {
    connection.write("Say: HISSSSSSSS");
  }
  if (key === "3") {
    connection.write("Say: no u ded");
  }

};

module.exports = {
  setupInput
};
