import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { Caret } from '../../caret';
import { useCaret } from '../../../hooks/use-caret';
import {TextListsWidgetProps} from './types';

const cx = classNames.bind(styles);

const Placeholder = () => (
  <span className={cx('placeholder')}>
    Enter your To-Do
  </span>
);

export const TextListsWidget = ({
  text,
  users,
}: TextListsWidgetProps) => {
  const refNode = useRef<HTMLDivElement>(null);

  const {
    handleClick,
    handleChange,
    handleBlur,
    currentText,
    height,
    coords: {
      x, y
    }
  } = useCaret(refNode, text);

  console.log(x, y, height);

  return (
    <div
      ref={refNode}
      className={cx('text')}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleChange}
      tabIndex={0}
      contentEditable={currentText?.length !== 0}
      suppressContentEditableWarning={true}
    >
      {currentText || <Placeholder />}
      <Caret
        coords={{
          x, y, height
        }}
        name='Vladimir Schneider'
      />
      {users?.map((user) => (
        <Caret {...user} />
      ))}
    </div>
  )
};
