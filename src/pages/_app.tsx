//import { Provider } from 'react-redux';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  );
}

export default MyApp;