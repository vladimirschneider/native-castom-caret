import {useCallback, useRef} from 'react';

export type Coordinate = number | null;

export const useCaret = () => {
  const x = useRef<Coordinate>(null);
  const y = useRef<Coordinate>(null);

  const handleUpdateX = useCallback((coordinate: Coordinate) => {
    x.current = coordinate;
  }, []);

  const handleUpdateY = useCallback((coordinate: Coordinate) => {
    x.current = coordinate;
  }, []);

  return {
    handleUpdateX,
    handleUpdateY,
    coords: {
      x: x.current,
      y: y.current
    }
  };
};
