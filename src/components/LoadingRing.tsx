import type { JSX } from 'react';

const loadingMessage: string = 'Loading...';

const LoadingRing = (): JSX.Element => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="flex items-center justify-center min-h-screen"
    >
      <div className="flex gap-2" aria-hidden="true">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
      <span className="sr-only">{loadingMessage}</span>
    </div>
  );
};

export default LoadingRing;
