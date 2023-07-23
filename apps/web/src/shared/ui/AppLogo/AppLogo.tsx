import React from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Routes } from '@/shared/config/routeConfig/routes';
import Image from 'next/image';

export const AppLogo = () => (
  <AppLink href={Routes.Home} className="flex gap-4 items-center">
    <Image src="/logo.svg" alt="Ghost link" width={40} height={42} />
    <span className="text-primary font-bold text-3xl">Ghost link</span>
  </AppLink>
);
