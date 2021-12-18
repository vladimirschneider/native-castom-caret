import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import {CaretProps} from './types';

const cx = classNames.bind(styles);

export const Caret = ({
  x, y,
}: CaretProps) => {
  if (x === null || y === null) {
    return null;
  }

  return createPortal(
    <div
      className={cx('caret')}
      style={{
        transform: `translate3d(${x}px, ${(y || 0) + 7}px, 0px)`
      }}
    >
      <div className={cx('name')}>
        Vladimir Schneider
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('caret')
  );
};
