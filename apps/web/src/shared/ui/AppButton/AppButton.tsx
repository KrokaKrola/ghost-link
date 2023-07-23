import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AppButton = (props: IProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      type="button"
      className={clsx(
        twMerge(
          'text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
          className
        )
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AppButton;
