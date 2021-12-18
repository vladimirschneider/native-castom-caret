import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

type ListsProps = {
  children: React.ReactNode;
}

export const Lists = ({ children }: ListsProps) => (
  <div className={cx('lists')}>
    {children}
  </div>
);
