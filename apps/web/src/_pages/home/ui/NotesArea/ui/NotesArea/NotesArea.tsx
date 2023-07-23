'use client';

import React from 'react';
import AppButton from '@/shared/ui/AppButton/AppButton';
import { AppContainer } from '@/shared/ui/AppContainer/AppContainer';

const NotesArea = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AppContainer className="py-10">
      <form onSubmit={handleSubmit}>
        <textarea
          id="message"
          rows={10}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary focus:outline-primary resize-none"
          placeholder="Enter your notes"
        />
        <AppButton className="mt-5 mx-auto block w-[180px]">Generate Link</AppButton>
      </form>
    </AppContainer>
  );
};

export { NotesArea };
