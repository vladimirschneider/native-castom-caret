import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { CaretProps } from './types';

const cx = classNames.bind(styles);

export const Caret = ({
  coords: {
    x, y, height
  },
}: CaretProps) => {
  if (x === null || y === null) {
    return null;
  }

  return createPortal(
    <div
      className={cx('caret')}
      style={{
        transform: `translate3d(${x}px, ${(y || 0)}px, 0px)`,
        height: height || 0,
        backgroundColor: 'var(--color-system-blue-light)'
      }}
    />,
    // @ts-ignore
    document.getElementById('caret')
  );
};
