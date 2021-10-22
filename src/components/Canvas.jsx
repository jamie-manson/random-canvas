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
    rotationVelocity: 0,
    rotationSpeed: 3,
};

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;
        canvasRef.current.focus();
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

    const handleKeyDown = (event) => {
        //console.log(event);
        if (event.code === 'ArrowRight') {
            rotatingTriangle.rotationVelocity += rotatingTriangle.rotationSpeed;
        }
        if (event.code === 'ArrowLeft') {
            rotatingTriangle.rotationVelocity -= rotatingTriangle.rotationSpeed;
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
            rotatingTriangle.rotationVelocity *= 0.2;
        }
    };

    return (
        <canvas
            ref={canvasRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
        />
    );
};

export default Canvas;
