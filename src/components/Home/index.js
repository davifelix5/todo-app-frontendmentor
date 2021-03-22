import { Wrapper, Header, HeaderBackground } from './styles';

import TaskForm from '../TaskForm';
import Switch from '../Swtich';

export default function Home() {
  return (
    <Wrapper>
      <HeaderBackground>
        <Header>
          <Header.TitleArea>
            <h1>TODO</h1>
            <Switch />
          </Header.TitleArea>
          <TaskForm />
        </Header>
      </HeaderBackground>
    </Wrapper>
  );
}