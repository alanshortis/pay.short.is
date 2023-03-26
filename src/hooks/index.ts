import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

export const usePayMe = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(1);

  const handleChangeAmount = useCallback((value: number) => {
    if (value < 1 || value > 500) return;

    setAmount(value);
    router.push(`/${value}`);
  }, []);

  useEffect(() => {
    if (router.query.amount) {
      const amount = Number(router.query.amount[0]);

      if (amount < 1 || isNaN(amount)) {
        router.push('/1');
      } else if (amount > 500) {
        router.push('/500');
      } else {
        setAmount(amount);
      }
    }
  }, [router.query.amount]);

  return { amount, handleChangeAmount };
};
