import Link from 'next/link';

const providers = [
  {
    name: 'PayPal',
    url: 'https://paypal.me/shortis/',
  },
  {
    name: 'Monzo',
    url: 'https://monzo.me/alanshortis/',
  },
];

interface Props {
  amount: number;
}

export const Providers: React.FC<Props> = ({ amount }) => (
  <>
    {providers.map(({ url, name }) => (
      <Link key={url} href={`${url}${amount}`}>
        {name}
      </Link>
    ))}
  </>
);
