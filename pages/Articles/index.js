import React from 'react'
import ArticlesArticles from '../../components/articles/ArticlesArticles'
import ArticlesImage from '../../components/articles/ArticlesImage'
import Head from 'next/head'


function Articles() {
  return (
    <div>
       <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Dental Milošević" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/articlesImg.dc4b5cf5.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
    <ArticlesImage />
    <ArticlesArticles />
    </div>
  )
}

export default Articles