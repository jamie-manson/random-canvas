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
    draw(ctx, triangleObj);
    triangleObj.rotation += triangleObj.rotationSpeed;
    if (triangleObj.rotation >= 360) {
        triangleObj.rotation -= 360;
    }
}