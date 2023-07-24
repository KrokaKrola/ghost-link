import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';

interface AppContainerProps {
  className?: string;
  children: ReactNode;
}

export const AppContainer = memo((props: AppContainerProps) => {
  const { className, children } = props;

  return <div className={clsx('container mx-auto px-5', className)}>{children}</div>;
});

AppContainer.displayName = "AppContainer";
