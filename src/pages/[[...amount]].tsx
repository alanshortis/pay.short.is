import { type NextPage } from 'next';
import Head from 'next/head';
import { usePayMe } from '~/hooks';
import { Form, Providers } from '~/components';

const PayMe: NextPage = () => {
  const { amount, handleChangeAmount } = usePayMe();
  const title = `Pay Alan £${amount}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Form handler={handleChangeAmount} amount={amount} />
      <Providers amount={amount} />
    </div>
  );
};

export default PayMe;
