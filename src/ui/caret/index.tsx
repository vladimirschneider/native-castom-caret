import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { CaretProps } from './types';

const cx = classNames.bind(styles);

const getColor = (min: number, max: number) => {
  const red = Math.random() * (max - min) + min;
  const green = Math.random() * (max - min) + min;
  const blue = Math.random() * (max - min) + min;

  return `rgb(${red}, ${green}, ${blue})`;
};

export const Caret = ({
  coords: {
    x, y, height
  },
  name,
}: CaretProps) => {
  const color = getColor(0, 150);

  if (x === null || y === null) {
    return null;
  }

  return createPortal(
    <div
      className={cx('caret')}
      style={{
        transform: `translate3d(${x}px, ${(y || 0) + (height || 0) * 0.1}px, 0px)`,
        height: height || 0,
        backgroundColor: color
      }}
    >
      <div
        className={cx('name')}
        style={{
          backgroundColor: color
        }}
      >
        {name}
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('caret')
  );
};
