import '../styles/globals.css'
import { Provider } from 'react-redux'

import storeConfig from '../store/storeConfig';

const store = storeConfig()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider> 
  )
}

export default MyApp
