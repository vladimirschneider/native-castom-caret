import { widgets } from './widgets';

export type ListsWidgetProps = {
  type: keyof typeof widgets;
};

export const ListsWidget = ({
  type,
}: ListsWidgetProps) => {
  const Widget = widgets[type];

  return (
    <Widget />
  );
};
