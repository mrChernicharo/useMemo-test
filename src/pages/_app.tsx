import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// memorizar um  valor -> useMemo
// memorizar uma função -> useCallback
// memorizar um  componente -> React.memo
