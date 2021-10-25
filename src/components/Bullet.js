export default function createBullet(rotatingTriangle) {
    // create the bullet object
    const bulletObj = {
        x: rotatingTriangle.x,
        y: rotatingTriangle.y,
        dx: 0,
        dy: 0,
        radius: 1,
        color: 'white',
    };
    const bulletSpeed = 2;
    // determine the x and y velocities
    let angle = rotatingTriangle.rotation - 90;
    if (angle < 0) angle += 360;

    bulletObj.dx = Math.cos((Math.PI * angle) / 180) * bulletSpeed;
    bulletObj.dy = Math.sin((Math.PI * angle) / 180) * bulletSpeed;
    // return the bullet
    return bulletObj;
}
