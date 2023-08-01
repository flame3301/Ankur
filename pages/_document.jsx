import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/img/round.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="lund chusle mera"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="Flare" />
          <meta name="twitter:creator" content="Flare" />
          <meta property="og:url" content="https://flarebot.tech" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Flare" />
          <link
            rel="icon"
            href="/img/round.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Lund chusle mera"
          />
          <meta property="og:image" content="/img/round.png" />
          <meta property="og:image:alt" content="Flare" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Flare"
          />
          <meta name="theme-color" content="#2f3136" />
          <link rel="icon" href="/img/round.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
