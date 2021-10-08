import App from 'next/app';
import { AppContextProvider } from "../contexts/AppContext";
import AuthResolver from '../components/AuthResolver'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContextProvider>
        <AuthResolver>
          <Component {...pageProps} />
        </AuthResolver>
      </AppContextProvider>
    );
  }
}

export default MyApp;