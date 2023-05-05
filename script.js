// Get references to the player and food elements
const player = document.getElementById('player');
const food = document.getElementById('food');

// Set the player's initial position
let playerX = 0;
let playerY = 0;

// Set the food's initial position
let foodX = 200;
let foodY = 200;

// Define the player's movement speed
const playerSpeed = 10;

// Listen for arrow key presses to move the player
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      playerY -= playerSpeed;
      break;
    case 'ArrowDown':
      playerY += playerSpeed;
      break;
    case 'ArrowLeft':
      playerX -= playerSpeed;
      break;
    case 'ArrowRight':
      playerX += playerSpeed;
      break;
    default:
      break;
  }

  // Check for collision with the food
  if (isColliding(player, food)) {
    // Move the food to a new random position
    foodX = Math.floor(Math.random() * 380);
    foodY = Math.floor(Math.random() * 380);
    food.style.left = `${foodX}px`;
    food.style.top = `${foodY}px`;
  }

  // Update the player's position on the screen
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

// Define a function to check if two elements are colliding
function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}