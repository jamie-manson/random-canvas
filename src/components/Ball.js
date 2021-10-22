const draw = (ctx, ballObj) => {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(ballObj.x, ballObj.y, ballObj.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
};

export function drawBall(ctx, ballObj) {
    draw(ctx, ballObj);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
}
