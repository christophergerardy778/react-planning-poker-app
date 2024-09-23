import './i18n.ts'
import './main.css';

import 'reflect-metadata';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.tsx';
import { persistor, store } from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
  </StrictMode>,
);
