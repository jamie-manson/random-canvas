import React, { useRef, useEffect } from 'react';
import { drawBall } from './Ball';
import { drawSquare } from './Square';
import wallCollision from '../utils/wallCollision';
import squareCollision from '../utils/squareCollision';
import { drawTriangle } from './RotatingTriangle';
import createBullet from './Bullet';
import bulletWallCollision from '../utils/bulletWallCollision';

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

const defaultTriangle = {
    x: 50,
    y: 30,
    rotation: 0,
    rotationVelocity: 0,
    rotationSpeed: 3,
    velocity: 0,
};

const Canvas = () => {
    // useRef to keep track of components without having to rerender them
    const canvasRef = useRef(null);
    const rotatingTriangle = useRef(defaultTriangle);
    const bullets = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        rotatingTriangle.current.x = canvas.width / 2;
        rotatingTriangle.current.y = canvas.height / 2;

        let animationFrameId;
        canvas.focus();
        //Our draw came here
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);

            drawBall(context, ballObj);
            rotatingTriangle.current = drawTriangle(
                context,
                rotatingTriangle.current
            );
            drawSquare(context, squareObj);
            wallCollision(ballObj, canvas);

            if (bullets.current) {
                // see if bullet has hit the wall, if it has remove it
                bullets.current = bullets.current.filter(
                    (bullet) => !bulletWallCollision(bullet, canvas)
                );
                // draw the remaining bullets
                if (bullets.current) {
                    bullets.current.forEach((bullet) =>
                        drawBall(context, bullet)
                    );
                }
            }

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
        console.log(event);
        if (event.code === 'ArrowRight') {
            rotatingTriangle.current.rotationVelocity +=
                rotatingTriangle.current.rotationSpeed;
        }
        if (event.code === 'ArrowLeft') {
            rotatingTriangle.current.rotationVelocity -=
                rotatingTriangle.current.rotationSpeed;
        }

        if (event.code === 'Space') {
            bullets.current.push(createBullet(rotatingTriangle.current));
            console.log(bullets.current);
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
            rotatingTriangle.current.rotationVelocity *= 0.2;
        }
    };

    return (
        <canvas
            ref={canvasRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            width={800}
            height={500}
        />
    );
};

export default Canvas;
