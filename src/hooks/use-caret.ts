import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export type CaretPosition = number | null;

export type Coordinate = number | null;

export const IGNORE_KEYS = [
  'Shift',

  // Service keys
  'Control',
  'Alt',
  'Meta',

  // Arrows
  'ArrowUp',
  'ArrowDown',
  'Enter',
];

export const BACKSPACE_KEY = [
  'Backspace'
];

export const ARROW_LEFT_KEY = [
  'ArrowLeft'
];

export const ARROW_RIGHT_KEY = [
  'ArrowRight'
];

const getCoords = (node: RefObject<HTMLDivElement>, text: string | null) => {
  const scrollTopSize = document.documentElement.scrollTop;

  const selection = window.getSelection();

  if (!selection) {
    return {
      x: null,
      y: null,
      height: null
    };
  }

  const {
    x, y, height,
  } = selection.getRangeAt(0).getBoundingClientRect();

  if (!text || text.length === 0) {
    return {
      x: node.current?.clientLeft || null,
      y: y + scrollTopSize,
      height
    };
  }

  return {
    x, y: y + scrollTopSize, height
  };
};

export const useCaret = (node: RefObject<HTMLDivElement>, text: string | null) => {
  const [caretPosition, setCaretPosition] = useState<CaretPosition>(null);

  const [currentText, setCurrentText] = useState(text);

  const [x, setX] = useState<Coordinate>(null);
  const [y, setY] = useState<Coordinate>(null);

  const [height, setHeight] = useState<number | null>(null);

  const handleClick = useCallback(() => {
    const selection = window.getSelection();

    if (!selection) {
      return;
    }

    const coords = getCoords(node, currentText);

    setX(coords.x);
    setY(coords.y);

    setHeight(coords.height);

    setCaretPosition(selection.getRangeAt(0).startOffset);
  }, [node, currentText]);

  const handleChange = useCallback((e: any) => {
    e.preventDefault();

    const coords = getCoords(node, currentText);

    setX(coords.x);
    setY(coords.y);

    setHeight(coords.height);

    if (IGNORE_KEYS.includes(e.key)) {
      return;
    }

    if (ARROW_LEFT_KEY.includes(e.key)) {
      if (caretPosition !== null && caretPosition !== 0) {
        setCaretPosition(caretPosition - 1);
      }
      return;
    }

    if (ARROW_RIGHT_KEY.includes(e.key)) {
      if (caretPosition !== null && currentText && caretPosition < currentText.length) {
        setCaretPosition(caretPosition + 1);
      }
      return;
    }

    if (BACKSPACE_KEY.includes(e.key)) {
      if (!currentText || currentText?.length === 0) {
        return;
      }

      if (caretPosition === null) {
        return;
      }

      const left = currentText.substring(0, caretPosition - 1);
      const right = currentText.substring(caretPosition);

      setCurrentText(left + right);

      setCaretPosition(caretPosition - 1);

      return;
    }

    if (caretPosition === null) {
      return;
    }

    if (!currentText || currentText?.length === 0) {
      setCurrentText(e.key);
      return;
    }

    const left = currentText.substring(0, caretPosition);
    const right = currentText.substring(caretPosition);

    setCurrentText(left + e.key + right);

    setCaretPosition(caretPosition + e.key.length);
  }, [node, currentText, caretPosition]);

  const handleBlur = useCallback(() => {
    setX(null);
    setY(null);

    setHeight(null);
  }, []);

  useEffect(() => {
    const range = new Range();
    const selection = document.getSelection();

    if (selection && selection.focusNode && caretPosition) {
      range.setStart(selection.focusNode, caretPosition);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);

      const {
        x, y, height
      } = getCoords(node, currentText);

      setX(x);
      setY(y);

      setHeight(height);
    }
  }, [caretPosition, currentText, node]);

  return {
    handleClick,
    handleChange,
    handleBlur,
    currentText,
    height,
    coords: {
      x, y
    }
  };
};
