import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script 
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
        onLoad={() => console.log('loaded')}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}