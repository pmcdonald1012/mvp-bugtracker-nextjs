import Link from "next/link";
import Head from "next/head";
const Welcome = () => {
  return (
    <div>
       <Head> 
      <title>Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Welcome
      <Link href='/main'> Main</Link>
    </div>
  )
}
export default Welcome; 