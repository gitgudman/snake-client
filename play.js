#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()

const { connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting 1,2,3 ...");
connect();
setupInput();
