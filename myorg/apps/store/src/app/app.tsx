// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Banner } from '@myorg/common-ui';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { exampleProducts } from '@myorg/products';

export function App() {
  return (
    <div>
      <Banner />
      <NxWelcome title="store" />
      {exampleProducts.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}

export default App;
