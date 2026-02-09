import type { FunctionComponent } from 'react';
import { Board } from './kanban/Board.tsx';
import { Column } from './kanban/Column.tsx';
import { Task } from './kanban/Task.tsx';

export const App: FunctionComponent = () => {
  return (
    <Board
      title="Design weekly"
      description="A board to keep track of design progress."
    >
      <Column title="Last week">
        <Task
          title="Review scope"
          description="Review #390."
          tags={['Due 4/11', 'Design']}
        />
        <Task title="Team retro" />
      </Column>

      <Column title="This week">
        <Task
          assignees={[
            { avatarUrl: './img/user-aaa.jpg' },
            { avatarUrl: './img/user-bbb.jpg' },
          ]}
          title="Usability test"
          description="Research questions with Carina."
          tags={['Research']}
        />
      </Column>

      <Column title="Next week">
        <Task
          assignees={[{ avatarUrl: './img/user-bbb.jpg' }]}
          title="Culture workshop"
          description="Let’s build a great team."
          tags={['Due 24/11']}
        />
      </Column>
    </Board>
  );
};
