import { AppContainer } from '@/shared/ui/AppContainer/AppContainer';
import { ReactNode } from 'react';

interface IItemProps {
  svgContent: ReactNode;
  label: string;
  text: string;
}

const Item = ({ label, svgContent, text }: IItemProps) => {
  return (
    <div className="grow">
      <div className="mb-2">{svgContent}</div>
      <h3 className="text-2xl mb-2">{label}</h3>
      <p className="text-xl">{text}</p>
    </div>
  );
};

interface IProps {
  className?: string;
}

const HowItWorks = (props: IProps) => {
  const { className } = props;

  return (
    <AppContainer className="container px-5 mx-auto pb-12">
      <h2 className="text-4xl text-center mb-12 mt-10">How it works</h2>
      <div className="flex gap-12">
        <Item
          svgContent={
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[80px] fill-primary">
              <path d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2a2.7 2.7 0 0 1-1.92.8c-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z" />
            </svg>
          }
          label="Step 1"
          text="Use the form above to enter your sensitive information and retrieve a short URL"
        />
        <Item
          svgContent={
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[80px] fill-primary">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z" />
            </svg>
          }
          label="Step 2"
          text="Use the form above to enter your sensitive information and retrieve a short URL"
        />
        <Item
          svgContent={
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[80px] fill-primary">
              <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
            </svg>
          }
          label="Step 3"
          text="Use the form above to enter your sensitive information and retrieve a short URL"
        />
      </div>
    </AppContainer>
  );
};

export { HowItWorks };
