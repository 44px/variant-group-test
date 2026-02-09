import type { FunctionComponent } from 'react';
import { Avatar } from '../ui/Avatar.tsx';
import { Group, Stack } from '../ui/layout.tsx';
import { Tag } from '../ui/Tag.tsx';
import { UIText } from '../ui/UIText.tsx';
import classes from './Task.module.css';

export const Task: FunctionComponent<{
  title: string;
  description?: string;
  tags?: string[];
  assignees?: { avatarUrl: string }[];
}> = ({ title, description, tags, assignees }) => {
  return (
    <div className={classes.container}>
      <Stack gap={2}>
        {assignees?.length ? (
          <Group gap={1}>
            {assignees.map((assignee) => (
              <Avatar imageUrl={assignee.avatarUrl} />
            ))}
          </Group>
        ) : null}

        <UIText as="h3" variant="title" color="primary">
          {title}
        </UIText>

        {description ? (
          <UIText variant="body" color="muted">
            {description}
          </UIText>
        ) : null}

        {tags?.length ? (
          <Group gap={1}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Group>
        ) : null}
      </Stack>
    </div>
  );
};
