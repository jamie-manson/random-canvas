const draw = (ctx, triangleObj) => {
    ctx.save();
    ctx.translate(triangleObj.x, triangleObj.y);
    ctx.rotate((triangleObj.rotation * Math.PI) / 180);
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(10, 10);
    ctx.lineTo(5, 7);
    ctx.lineTo(-5, 7);
    ctx.lineTo(-10, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
};

export function drawTriangle(ctx, triangleObj) {
    // get a copy and then return the modded copy
    const newObject = { ...triangleObj };
    newObject.rotation += Math.min(
        Math.max(-5, triangleObj.rotationVelocity),
        5
    );
    if (newObject.rotation >= 360) {
        newObject.rotation -= 360;
    }
    if (newObject.rotation < 0) {
        newObject.rotation += 360;
    }
    draw(ctx, newObject);
    return newObject;
}
