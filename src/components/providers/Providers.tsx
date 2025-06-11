'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProvidersProps } from './types';

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <MainLayout>{children}</MainLayout>
    </Provider>
  );
} 