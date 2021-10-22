import React, { useRef, useEffect } from 'react';
import { drawBall } from './Ball';
import { drawSquare } from './Square';
import wallCollision from '../utils/wallCollision';
import squareCollision from '../utils/squareCollision';
import { drawTriangle } from './RotatingTriangle';

const ballObj = {
    x: 50,
    y: 30,
    dx: 3,
    dy: -1,
    radius: 10,
};

const squareObj = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: 'red',
};

const rotatingTriangle = {
    x: 50,
    y: 30,
    rotation: 0,
    rotationSpeed: 1,
};

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;

        //Our draw came here
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBall(context, ballObj);
            drawTriangle(context, rotatingTriangle);
            drawSquare(context, squareObj);
            wallCollision(ballObj, canvas);
            if (squareCollision(ballObj, squareObj)) {
                squareObj.color = 'blue';
            } else {
                squareObj.color = 'red';
            }
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Canvas;
