import { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';
import { neatConfig } from './neatConfig'; // поправь путь, если у тебя он другой

export default function NeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const neatRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    // защита от двойного mount в dev + повторной инициализации
    if (!canvasRef.current || neatRef.current) return;

    neatRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...neatConfig,
    });

    return () => {
      neatRef.current?.destroy();
      neatRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-screen h-screen"
    />
  );
}
