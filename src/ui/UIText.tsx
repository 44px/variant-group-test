import type { FunctionComponent, PropsWithChildren } from 'react';
import classes from './UIText.module.css';

const variants = {
  heading: classes.variantHeading,
  title: classes.variantTitle,
  caption: classes.variantCaption,
  body: classes.variantBody,
};

const colors = {
  primary: classes.colorPrimary,
  secondary: classes.colorSecondary,
  muted: classes.colorMuted,
};

export const UIText: FunctionComponent<
  PropsWithChildren<{
    variant?: keyof typeof variants;
    color?: keyof typeof colors;
    as?: 'h1' | 'h2' | 'h3' | 'span';
  }>
> = ({
  variant = 'body',
  color = 'muted',
  as: Component = 'span',
  children,
}) => {
  return (
    <Component
      className={`${classes.container} ${variants[variant]} ${colors[color]}`}
    >
      {children}
    </Component>
  );
};
