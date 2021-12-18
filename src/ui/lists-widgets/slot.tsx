import { widgets } from './widgets';

export type ListsWidgetProps = {
  type: keyof typeof widgets;
  [key: string]: any,
};

export const ListsWidget = ({
  type, ...props
}: ListsWidgetProps) => {
  const Widget = widgets[type];

  return (
    // @ts-ignore
    <Widget {...props} />
  );
};
