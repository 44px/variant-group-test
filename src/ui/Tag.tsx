import type { FunctionComponent, PropsWithChildren } from 'react';
import classes from './Tag.module.css';
import { UIText } from './UIText.tsx';

export const Tag: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.container}>
      <UIText variant="caption" color="secondary">
        {children}
      </UIText>
    </div>
  );
};
