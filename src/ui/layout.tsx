import type { FunctionComponent, PropsWithChildren } from 'react';
import classes from './layout.module.css';

const gaps = {
  1: classes.gap1,
  2: classes.gap2,
  3: classes.gap3,
  6: classes.gap6,
};

type Gap = keyof typeof gaps;

export const Stack: FunctionComponent<PropsWithChildren<{ gap: Gap }>> = ({
  gap,
  children,
}) => {
  return <div className={`${classes.stack} ${gaps[gap]}`}>{children}</div>;
};

export const Group: FunctionComponent<PropsWithChildren<{ gap: Gap }>> = ({
  gap,
  children,
}) => {
  return <div className={`${classes.group} ${gaps[gap]}`}>{children}</div>;
};
