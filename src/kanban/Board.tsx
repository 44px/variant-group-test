import type { FunctionComponent, PropsWithChildren } from 'react';
import { Group, Stack } from '../ui/layout.tsx';
import { UIText } from '../ui/UIText.tsx';
import classes from './Board.module.css';

export const Board: FunctionComponent<
  PropsWithChildren<{ title: string; description: string }>
> = ({ title, description, children }) => {
  return (
    <div className={classes.container}>
      <Stack gap={6}>
        <Stack gap={2}>
          <UIText as="h1" variant="heading" color="primary">
            {title}
          </UIText>
          <UIText variant="body" color="muted">
            {description}
          </UIText>
        </Stack>
        <div className={classes.columns}>
          <Group gap={3}>{children}</Group>
        </div>
      </Stack>
    </div>
  );
};
