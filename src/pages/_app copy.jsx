import '../styles/globals.css'
import { Provider } from 'react-redux'

import storeConfig from '../store/storeConfig';

const store = storeConfig()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
