// Import the Game class from the local game.js file
const Game = require('./game');

// Get the canvas element from the HTML (should have id="gameCanvas") and its 2D drawing context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Create a new instance of the Game class to manage game state and logic
const game = new Game();

/**
 * The main game loop.
 * - Calls the game's update method to process game logic (movement, collisions, etc.)
 * - Calls the game's render method to draw the current state to the canvas
 * - Uses requestAnimationFrame to keep the loop running smoothly
 */
function gameLoop() {
    game.update();
    game.render(ctx);
    requestAnimationFrame(gameLoop);
}

// Listen for keyboard events and pass them to the game's input handler
document.addEventListener('keydown', (event) => {
    game.handleInput(event);
});

// Start the game and begin the main loop
game.start();
gameLoop();