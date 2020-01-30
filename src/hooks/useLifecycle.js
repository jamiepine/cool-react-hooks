import { useEffect, useState } from 'react';

export function useLifecycle(onMount, onUnmount) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (onMount) onMount();
    return () => {
      if (onUnmount) onUnmount();
    };
  });

  return [mounted];
}
