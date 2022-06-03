import { useState, useEffect } from "react";
import Head from "next/head";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => setAuthenticated(result.authenticated));
  }, []);

  return (
    <div className={"container"}>
      <Head>
        <title>We Are Developers Workshop</title>
        <meta name="description" content="We Are Developers Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? <></> : <a href="/api/signin">Sign In</a>}
    </div>
  );
}
