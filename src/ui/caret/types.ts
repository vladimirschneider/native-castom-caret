import { Coordinate } from '../../hooks/use-caret';

export type CaretProps = {
  coords: {
    x: Coordinate;
    y: Coordinate;
    height: number | null;
  }
  name: string;
};
