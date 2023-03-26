import Head from 'next/head';

interface Props {
  amount: number;
}

export const DocumentHead: React.FC<Props> = ({ amount }) => {
  const title = `Pay Alan Shortis £${amount}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Pay Alan Shortis" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Pay Alan Shortis" />
      <meta property="og:url" content={`https://short.is/${amount}`} />
      <meta property="og:image" content="https://short.is/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@alanshortis" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Pay Alan Shortis" />
      <meta name="twitter:image" content="https://short.is/og.png" />
      <link rel="icon" type="image/png" href="https://short.is/favicon.png" />
      <link rel="icon" type="image/svg+xml" href="https://short.is/favicon.svg" />
    </Head>
  );
};
