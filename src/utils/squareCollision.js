export default function squareCollision(ballObj, squareObj) {
    const distX = Math.abs(ballObj.x - squareObj.x - squareObj.width / 2);
    const distY = Math.abs(ballObj.y - squareObj.y - squareObj.height / 2);

    if (distX > squareObj.width / 2 + ballObj.radius) {
        return false;
    }
    if (distY > squareObj.height / 2 + ballObj.radius) {
        return false;
    }

    if (distX <= squareObj.width / 2) {
        return true;
    }
    if (distY <= squareObj.height / 2) {
        return true;
    }

    const dx = distX - squareObj.width / 2;
    const dy = distY - squareObj.height / 2;
    return dx * dx + dy * dy <= ballObj.radius * ballObj.radius;
}
