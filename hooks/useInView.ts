import { useEffect, useState, useRef } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Only trigger once
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [options]);

  return { ref, inView };
}
