import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export type HeaderProps = {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <div className={cx('header')}>
    {children}
  </div>
)
