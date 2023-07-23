import React from 'react';
import { Routes } from '@/shared/config/routeConfig/routes';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppContainer } from '@/shared/ui/AppContainer/AppContainer';
import { AppLogo } from '@/shared/ui/AppLogo/AppLogo';

const topPartLinks = [
  {
    id: 2,
    text: 'Terms',
    path: Routes.Terms,
  },
  {
    id: 2,
    text: 'Privacy',
    path: Routes.Privacy,
  },
  {
    id: 3,
    text: 'Contact',
    path: Routes.Contact,
  },
];

const mainPartLinks = [
  {
    id: 1,
    text: 'Home',
    path: Routes.Home,
  },
  {
    id: 2,
    text: 'About',
    path: Routes.About,
  },
  {
    id: 3,
    text: 'Sign in',
    path: Routes.SignIn,
  },
];

const Header = () => (
  <div className="flex flex-col w-full">
    <div className="bg-blueGray-200">
      <AppContainer className="py-1 flex justify-end gap-6">
        {topPartLinks.map((link) => (
          <AppLink key={link.id} href={link.path} className="text-sm text-stone-400">
            {link.text}
          </AppLink>
        ))}
      </AppContainer>
    </div>
    <div>
      <AppContainer className="py-5 flex justify-between items-center">
        <AppLogo />
        <div className="flex gap-8">
          {mainPartLinks.map((link) => (
            <AppLink href={link.path} key={link.id}>
              {link.text}
            </AppLink>
          ))}
        </div>
      </AppContainer>
    </div>
  </div>
);

export default Header;
