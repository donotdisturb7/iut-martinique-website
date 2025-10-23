import { useState } from "react";
import { motion } from "framer-motion";

function FrameComponent({
  image,
  width,
  height,
  className = "",
  isHovered,
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-full h-full object-cover transition-transform duration-700"
            src={image}
            alt=""
            style={{ 
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </div>
        
        {/* Overlay gradient au hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300"
          style={{ opacity: isHovered ? 1 : 0.8 }}
        />
        
        {/* Badge en haut à droite */}
        <div className="absolute top-4 right-4 z-10">
          <span 
            className="px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transition-all duration-300"
            style={{
              backgroundColor: isHovered ? '#009dd7' : 'rgba(255, 255, 255, 0.9)',
              color: isHovered ? 'white' : '#1f2937',
            }}
          >
            Recherche
          </span>
        </div>
      </div>
    </div>
  );
}

export function DynamicFrameLayout({ 
  frames: initialFrames, 
  className,
  hoverSize = 6,
  gapSize = 6
}) {
  const [frames] = useState(initialFrames);
  const [hovered, setHovered] = useState(null);

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ");
  };

  const getTransformOrigin = (x, y) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y);

        return (
          <motion.div
            key={frame.id}
            className="relative cursor-pointer"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              image={frame.image}
              width="100%"
              height="100%"
              className="absolute inset-0"
              isHovered={hovered?.row === row && hovered?.col === col}
            />
            
            {/* Titre et description du projet */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-white text-xl font-bold leading-tight mb-2 drop-shadow-lg">
                {frame.title}
              </h3>
              <p className="text-white/90 text-sm drop-shadow-md">
                {frame.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

