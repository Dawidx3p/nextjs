import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

const GlobalStyle2 = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont,        
    "Segoe UI", "Roboto", "Oxygen","Ubuntu", 
    "Cantarell", "Fira Sans", "Droid Sans", 
  "Helvetica Neue", sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`



function MyApp({ Component, pageProps }) {
  return (<>
    <GlobalStyle2 />
    <Header />
    <Component {...pageProps} />
  </>)
}

export default MyApp
