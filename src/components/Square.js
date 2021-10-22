const draw = (ctx, squareObj) => {
    ctx.beginPath();
    ctx.fillStyle = squareObj.color;
    ctx.rect(squareObj.x, squareObj.y, squareObj.width, squareObj.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
};

export function drawSquare(ctx, squareObj) {
    draw(ctx, squareObj);
}
