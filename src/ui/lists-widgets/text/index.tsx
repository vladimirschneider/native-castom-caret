import {useCallback, useRef} from 'react';
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
  onBlur
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

  const handleBlurTodo = useCallback(() => {
    handleBlur();

    if (currentText !== null && currentText !== '' && currentText !== text) {
      onBlur?.(currentText);
    }
  }, [handleBlur, onBlur, currentText]);

  return (
    <div className={cx('wrapper')}>
      <div
        ref={refNode}
        className={cx('text')}
        onClick={handleClick}
        onBlur={handleBlurTodo}
        onKeyDown={handleChange}
        tabIndex={0}
        contentEditable={currentText !== null}
        suppressContentEditableWarning
      >
        {currentText || <Placeholder />}
        <Caret
          coords={{
            x, y, height
          }}
        />
      </div>
    </div>
  )
};
