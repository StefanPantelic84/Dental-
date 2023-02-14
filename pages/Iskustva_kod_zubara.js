import React from "react";
import StoryImage from "../components/story/StoryImage";
import StoryDark from "../components/story/StoryDark";
import Head from "next/head";

function Iskustva_kod_zubara() {
  return (
    <div>
      <Head>
        {" "}
        <title>Milosevic/Dental</title>
        <meta property="og:title" content="Za blistav osmeh!" />
        <meta
          property="og:description"
          content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. "
        />
        <meta
          property="og:image"
          content="https://milosevicdental.com/_next/static/media/c2.d556df6a.webp"
        />
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu."
        />
      </Head>
      <StoryImage />
      <StoryDark />
    </div>
  );
}

export default Iskustva_kod_zubara;
