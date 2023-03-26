import type { AppProps } from 'next/app';
import '~/styles/global.scss';

const PayMe = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default PayMe;
