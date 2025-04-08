// pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/app/globals.css';
import Header from '@/components/header'; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
