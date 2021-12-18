import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

type ListComponentsProps = {
  children: React.ReactNode;
}

export const ListComponents = ({ children }: ListComponentsProps) => (
  <Fragment>
    {
      React.Children.map(children, (child) => (
        <div className={cx('child')}>
          {child}
        </div>
      ))
    }
  </Fragment>
);
