import { type NextPage } from 'next';
import Head from 'next/head';
import { usePayMe } from '~/hooks';
import { DocumentHead, Form, Providers } from '~/components';

const PayMe: NextPage = () => {
  const { amount, handleChangeAmount } = usePayMe();
  return (
    <div>
      <DocumentHead amount={amount} />
      <Form handler={handleChangeAmount} amount={amount} />
      <Providers amount={amount} />
    </div>
  );
};

export default PayMe;
