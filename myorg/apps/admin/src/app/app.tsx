// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Banner } from '@myorg/common-ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Banner />
      <NxWelcome title="admin" />
    </div>
  );
}

export default App;
