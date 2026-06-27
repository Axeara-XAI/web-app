'use client';

import type { ReactNode } from 'react';

import { FluentProvider } from '@fluentui/react-components';
import { fgrLightTheme } from '@/src/components/theme/AxaraTheme';

// ==========================================
// 1. PROVIDERS APLIKASI
// ==========================================
export function Providers({ children }: { children: ReactNode }) {
  return (
    <FluentProvider theme={fgrLightTheme}>
      {children}
    </FluentProvider>
  );
}