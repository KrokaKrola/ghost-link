import React from 'react';
import { AppContainer } from '@/shared/ui/AppContainer/AppContainer';

export const Banner = () => (
  <div className="bg-secondary">
    <AppContainer className="text-warmGray-100 flex flex-col justify-center text-center items-center py-12">
      <h1 className="text-5xl font-bold mb-4">Ghost link</h1>
      <h2 className="italic text-2xl mb-2">What is it?</h2>
      <p className="text-base">
        If you need to send a password or some other form of simple but sensitive information to someone you can not send it over IM or
        email. These methods are not secure as anyone with little knowledge can intercept this information during transmission. Using
        ghost-link.me as the "middle man" you can safely and securely transfer this data to your recipient.
      </p>
    </AppContainer>
  </div>
);
