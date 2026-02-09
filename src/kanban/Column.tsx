import type { FunctionComponent, PropsWithChildren } from 'react';
import { Stack } from '../ui/layout.tsx';
import { UIText } from '../ui/UIText.tsx';
import classes from './Column.module.css';

export const Column: FunctionComponent<
  PropsWithChildren<{
    title: string;
  }>
> = ({ title, children }) => {
  return (
    <div className={classes.container}>
      <Stack gap={3}>
        <div className={classes.title}>
          <UIText as="h2" variant="title" color="secondary">
            {title}
          </UIText>
        </div>
        <>{children}</>
      </Stack>
    </div>
  );
};
