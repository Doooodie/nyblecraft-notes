import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading';
import App from './components/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
);
