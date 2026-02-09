import type { FunctionComponent } from 'react';
import classes from './Avatar.module.css';

export const Avatar: FunctionComponent<{ imageUrl: string }> = ({
  imageUrl,
}) => (
  <div className={classes.container}>
    <img src={imageUrl} width="18px" height="18px" />
  </div>
);
