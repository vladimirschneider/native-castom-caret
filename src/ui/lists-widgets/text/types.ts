import { Coordinate } from '../../../hooks/use-caret';

export type User = {
  coords: {
    x: Coordinate;
    y: Coordinate;
    height: number | null;
  },
  name: string;
};

export type TextListsWidgetProps = {
  text: string | null;
  users?: User[];
};
