import '../styles/globals.css'
import '../styles/navigation.css'
import '../styles/homestyles/homepage.css' 
import '../styles/homestyles/homeimage.css'
import '../styles/firstvisitstyles/firstvisitvideo.css'
import '../styles/firstvisitstyles/firstvisitone.css'
import '../styles/firstvisitstyles/firstvisittwo.css'
import '../styles/firstvisitstyles/firstvisitthree.css'
import '../styles/firstvisitstyles/firstvisitfour.css'
import '../styles/firstvisitstyles/firstvisitlast.css'
import '../styles/firstvisitstyles/firstvisitimage.css'
import '../styles/homestyles/homedifference.css'
import '../styles/homestyles/homebelong.css'
import '../styles/homestyles/homedark.css'
import '../styles/homestyles/homepassion.css'
import '../styles/homestyles/homesmile.css'
import '../styles/homestyles/homearray.css'
import '../styles/connect.css'
import '../styles/menu.css'
import '../styles/teamstyles/teamimage.css'
import '../styles/teamstyles/teamhead.css'
import '../styles/teamstyles/teamfamily.css'
import '../styles/teamstyles/teamassistents.css'
import '../styles/teamstyles/teamhygienist.css'
import '../styles/footer.css'
import '../styles/smilestyles/smileimage.css'
import '../styles/smilestyles/smilecare.css'
import '../styles/smilestyles/smiledark.css'
import '../styles/smilestyles/smilecosmetic.css'
import '../styles/storystyles/storyimage.css'
import '../styles/storystyles/storyface.css'
import '../styles/storystyles/storydark.css'
import '../styles/afterstyles/afterimage.css'
import '../styles/afterstyles/afterslide.css'
import '../styles/afterstyles/afterslide2.css'
import '../styles/afterstyles/afterslide3.css'
import '../styles/afterstyles/afterslide4.css'
import '../styles/afterstyles/afterslide5.css'
import '../styles/contactstyles/contactimage.css'
import '../styles/contactstyles/contactlast.css'
import '../styles/contactstyles/contactform.css'
import '../styles/contactstyles/contactprice.css'
import '../styles/difference/diffone.css'
import '../styles/difference/difftwo.css'
import '../styles/difference/diffthree.css'
import '../styles/difference/difffour.css'
import '../styles/difference/diffdark.css'
import '../styles/difference/diffimage.css'
import '../styles/articlesstyles/articlesimage.css'
import '../styles/articlesstyles/articlesarticles.css'
import '../styles/allpages.css'
import Navigation from '../components/Navigation'
import Connect from '../components/Connect'
import Footer from '../components/Footer'




function MyApp({ Component, pageProps }) {



  return <>

  <Navigation />
  <Component {...pageProps} />
  <Connect />
  <Footer />
  </>
}

export default MyApp
