/*
  Keep track of the window's width/height
  in React state.
*/
import {useEffect, useState } from 'react';
import { throttle } from '../utils';
const useWindowDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: undefined, height: undefined, clientWidth: undefined };
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    clientWidth: document.documentElement.clientWidth,
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        clientWidth: document.documentElement.clientWidth,
      });
    }, 250);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // For the very first render, for whatever reason, the width of the scrollbars
  // is sometimes not taken into account, so we need to wait until after
  // the first render to set it.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (windowDimensions.clientWidth !== document.documentElement.clientWidth) {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        clientWidth: document.documentElement.clientWidth,
      });
    }
    // The whole point is to fix an irregularity on mount, so we only want to
    // run this effect on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return windowDimensions;
};
export default useWindowDimensions;