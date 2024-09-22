import { AuthLayoutFooterLink } from './AuthLayoutFooterLink.tsx';

export const AuthLayoutFooterLinks = () => {
  const links = [
    {
      text: 'Pokerplanning.com',
      url: 'pokerplanning.com',
    },
    {
      text: 'Github',
      url: 'https://github.com/christophergerardy778',
    },
    {
      text: 'Linkedin',
      url: 'https://www.linkedin.com/in/christopher-gerardy/',
    },
    {
      text: 'christophergerardy778@gmail.com',
      url: 'mailto:christophergerardy778@gmail.com',
    },
  ];

  return (
    <div className={'flex flex-wrap justify-center gap-y-2 gap-x-4'}>
      {links.map((item, index) => (
        <AuthLayoutFooterLink to={item.url} key={index}>
          {item.text}
        </AuthLayoutFooterLink>
      ))}
    </div>
  );
};
