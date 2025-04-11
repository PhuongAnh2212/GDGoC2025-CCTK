import React from 'react';

interface BlurredCircleProps {
  size?: number; // default: 500
  color?: string; // default: blue-500
  blur?: number; // default: 120
  className?: string;
}

const BlurredCircle: React.FC<BlurredCircleProps> = ({
  size = 500,
  color = 'from-blue-500/30',
  blur = 120,
  className = '',
}) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 blur-[${blur}px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${color} to-transparent`}
      style={{ width: size, height: size }}
    />
  );
};

export default BlurredCircle;
