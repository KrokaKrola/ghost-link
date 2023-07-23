import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props extends LinkProps {
  className?: string;
  children: string | ReactNode;
}

export const AppLink = memo((props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <Link className={clsx(className, twMerge('hover:text-primary'))} {...rest}>
      {children}
    </Link>
  );
});
