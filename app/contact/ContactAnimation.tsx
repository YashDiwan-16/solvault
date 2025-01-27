"use client";
import { motion } from "framer-motion";

export default function ContactAnimation() {
  const circle1Center = { x: 150, y: 200 };
  const circle2Center = { x: 250, y: 200 };
  const radius1 = 70;
  const radius2 = 50;

  // Create rocket path
  const rocketPath = `M-6,-3 L-6,3 L0,3 L3,0 L0,-3 Z`;

  // Define gradients and filters
  const definitions = (
    <defs>
      <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );

  return (
    <motion.div className="relative w-[600px] h-[600px]">
      <motion.svg viewBox="0 0 400 400" className="w-full h-full">
        {definitions}

        {/* Energy field effect */}
        <motion.circle
          cx={circle1Center.x}
          cy={circle1Center.y}
          r={radius1 + 10}
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="15"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main circles with enhanced effects */}
        <motion.circle
          cx={circle1Center.x}
          cy={circle1Center.y}
          r={radius1}
          stroke="#4F46E5"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
          }}
          transition={{
            scale: { duration: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.circle
          cx={circle2Center.x}
          cy={circle2Center.y}
          r={radius2}
          stroke="#4F46E5"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotate: -360,
          }}
          transition={{
            scale: { duration: 0.5 },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Rockets and trails */}
        {[0, 1, 2].map((i) => (
          <g key={`rocket-${i}`}>
            <motion.path
              d={rocketPath}
              fill="#4F46E5"
              filter="url(#glow)"
              initial={{ x: circle1Center.x, y: circle1Center.y }}
              animate={{
                x: [circle1Center.x, circle2Center.x, circle1Center.x],
                y: [
                  circle1Center.y,
                  circle1Center.y + (i - 1) * 30,
                  circle2Center.y,
                ],
                rotate: [0, 0, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d={`M${circle1Center.x},${circle1Center.y} Q${
                (circle1Center.x + circle2Center.x) / 2
              },${circle1Center.y + (i - 1) * 30} ${circle2Center.x},${
                circle2Center.y
              }`}
              stroke="#4F46E5"
              strokeWidth="1"
              strokeDasharray="4,4"
              fill="none"
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            />
          </g>
        ))}

        {/* Star particles */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`star-${i}`}
            r="2"
            fill="#4F46E5"
            filter="url(#glow)"
            initial={{
              x: circle1Center.x + (Math.random() - 0.5) * 150,
              y: circle1Center.y + (Math.random() - 0.5) * 150,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Energy pulses */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={circle2Center.x}
            cy={circle2Center.y}
            r={radius2}
            stroke="#4F46E5"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
}
