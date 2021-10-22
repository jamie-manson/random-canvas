export default function wallCollision(ballObj, canvas) {
    if (
        ballObj.y + ballObj.radius >= canvas.height ||
        ballObj.y - ballObj.radius <= 0
    ) {
        ballObj.dy *= -1;
    }
    if (
        ballObj.x + ballObj.radius >= canvas.width ||
        ballObj.x - ballObj.radius <= 0
    ) {
        ballObj.dx *= -1;
    }
}
