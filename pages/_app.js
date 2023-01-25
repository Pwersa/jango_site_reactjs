import '../styles/globals.css'
import * as React from "react";
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, router }) {
  // React.useEffect(() => {
  //   toast({ type: "info", message: "Hello world!" });
  // }, []);
  
  return (
  <SessionProvider session={pageProps.session}>
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
    
  </SessionProvider>
  )
}

export default MyApp;