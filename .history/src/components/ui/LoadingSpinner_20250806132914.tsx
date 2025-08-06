'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className,
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="mb-2"
      >
        <Loader2 className={cn('text-blue-600', sizeClasses[size])} />
      </motion.div>
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

// Alternative spinner designs
export function DotSpinner({ className }: { className?: string }) {
  return (
    <div className={cn('flex space-x-1', className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-blue-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );
}

export function PulseSpinner({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <motion.div
        className="w-8 h-8 border-4 border-blue-200 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />
      <motion.div
        className="absolute inset-0 w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
}