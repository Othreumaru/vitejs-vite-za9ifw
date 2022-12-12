import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const WIDTH = 800;
  const HEIGHT = 800;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d')!;

    const getRndInt = (max: number) => Math.floor(Math.random() * max);

    const points = [
      { x: WIDTH / 2, y: 0 },
      { x: 0, y: HEIGHT },
      { x: WIDTH, y: HEIGHT },
    ];
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#ffff00';
    Array.from({ length: 10000 }).forEach(() => {
      const firstPoint = points[getRndInt(3)];
      const secondPoint = points[getRndInt(points.length)];

      points.push({
        x: (firstPoint.x + secondPoint.x) / 2,
        y: (firstPoint.y + secondPoint.y) / 2,
      });
    });
    points.forEach((p) => {
      ctx.fillRect(p.x, p.y, 1, 1);
    });
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
    </div>
  );
}

export default App;
