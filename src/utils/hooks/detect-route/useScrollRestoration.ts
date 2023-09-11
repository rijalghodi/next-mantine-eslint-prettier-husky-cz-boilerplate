import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

// Scroll position management
export default function useScrollRestoration() {
  const router = useRouter();
  const retainedComponents = useRef<{ [url: string]: number }>({});

  useEffect(() => {
    // Save the scroll position of current page before leaving but you can do what you want
    const handleRouteChangeStart = () => {
      retainedComponents.current[router.asPath] = window.scrollY;
    };

    // Scroll to the saved position but you can do what you want
    const onRouteChangeComplete = () => {
      if (retainedComponents.current[router.asPath]) {
        window.scrollTo(0, retainedComponents.current[router.asPath]);
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.asPath, router.events]);
}
