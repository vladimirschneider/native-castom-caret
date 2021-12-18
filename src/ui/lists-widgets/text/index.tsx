import {useCallback, useEffect, useRef, useState} from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import {Caret} from '../../caret';

const cx = classNames.bind(styles);

const Placeholder = () => (
  <span className={cx('placeholder')}>
    Enter your To-Do
  </span>
);

export const TextListsWidget = () => {
  const [text, setText] = useState('');
  const refNode = useRef<HTMLDivElement>(null);

  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);

  const [selectPosition, setSelectPosition] = useState(0);

  const calcSelection = useCallback(() => {
    const sel = window.getSelection();

    if (!sel) {
      return;
    }

    const { x, y } = sel.getRangeAt(0).getBoundingClientRect();

    if (text.length === 0) {
      setX(refNode.current!.clientLeft);
    } else {
      setX(x);
    }
    setY(y);
  }, [text.length]);

  const handleClick = useCallback((e: any) => {
    calcSelection();

    const sel = window.getSelection();

    if (sel) {
      if (text.length !== 0) {
        setSelectPosition(sel.getRangeAt(0).startOffset);
      }
    }
  }, [calcSelection, text.length]);

  const handleBlur = useCallback(() => {
    // @ts-ignore
    setX(null);
    // @ts-ignore
    setY(null);
  }, []);

  const handleChange = useCallback((e: any) => {

    if (e.key === 'Shift') {
      e.preventDefault();
      return;
    }

    if ([
      'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp',
      'Shift', 'Control', 'Alt', 'Meta'
    ].includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();

      if (text.length === 0) {
        return;
      }

      const start = text.substring(0, selectPosition - 1);
      const end = text.substring(selectPosition);

      setSelectPosition(selectPosition - 1);

      setText(start + end);

      return;
    }

    e.preventDefault();

    const start = text.substring(0, selectPosition);
    const end = text.substring(selectPosition);

    setSelectPosition(selectPosition + e.key.length);

    setText(start + e.key + end);
  }, [selectPosition, text]);

  useEffect(() => {
    // window.getSelection()!.setBaseAndExtent(refNode.current!, 2, refNode.current!, 2);
    var range = document.createRange()
    var sel = window.getSelection()

    if (sel && sel.focusNode) {
      range.setStart(sel.focusNode, selectPosition)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
      calcSelection();
    }
  }, [calcSelection, selectPosition]);

  return (
    <div
      ref={refNode}
      className={cx('text')}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleChange}
      tabIndex={0}
      contentEditable={text.length !== 0}
      suppressContentEditableWarning={true}
    >
      {text || <Placeholder />}
      <Caret
        x={x}
        y={y}
      />
    </div>
  )
};
