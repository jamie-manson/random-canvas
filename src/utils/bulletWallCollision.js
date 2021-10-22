export default function bulletWallCollision(ballObj, canvas) {
    if (
        ballObj.y + ballObj.radius >= canvas.height ||
        ballObj.y - ballObj.radius <= 0
    ) {
        return true;
    }
    if (
        ballObj.x + ballObj.radius >= canvas.width ||
        ballObj.x - ballObj.radius <= 0
    ) {
        return true;
    }
    return false;
}
