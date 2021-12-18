import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames/bind';
import { ListsWidget } from './ui/lists-widgets/slot';
import { ListComponents } from './ui/list-components';
import { Lists } from './ui/lists';
import {Header} from './ui/header';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

type Todo = {
  id: string;
  text: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleBlur = useCallback((todo: string) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        text: todo
      }
    ]);
  }, [todos]);

  return (
    <Lists>
      <div className={cx('header')}>
        <Header>
          List Example
        </Header>
      </div>
      <ListComponents>
          {todos.map((todo) => (
            <ListsWidget
              key={todo.id}
              type="text"
              text={todo.text}
            />
          ))}
        <ListsWidget
          key={nanoid()}
          type="text"
          text={null}
          onBlur={handleBlur}
        />
      </ListComponents>
    </Lists>
  );
};
