import { type NextPage } from 'next';
import Link from 'next/link';
import { providers } from '../providers';

const FuPayMe: NextPage = () => (
  <div>
    <p>Fuck You Pay Me</p>
    {providers.map(p => (
      <Link href={p.url}>{p.name}</Link>
    ))}
  </div>
);

export default FuPayMe;
