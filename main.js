let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // 32 px cada quadrado
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function createBackground() {
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // x, y, width, height
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
        
    }
}

function startGame() {
    createBackground();
    createSnake();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // coordernadas
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(startGame, 100);