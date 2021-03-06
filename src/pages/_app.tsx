import "tailwindcss/tailwind.css";

import type { AppProps } from "next/dist/shared/lib/router/router";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
