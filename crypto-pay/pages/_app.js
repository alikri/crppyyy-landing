import { Header } from '@/components/Header/header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="main-wrapper">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
