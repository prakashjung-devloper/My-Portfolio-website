import { useEffect, useState } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    console.log("Dark mode: ", darkMode);
  }, [darkMode]);

  useEffect(() => {
    typeof document !== "undefined" ? require("bootstrap/dist/js/bootstrap.bundle.min.js") : null;
  }, []);

  return (
    <Component
      {...pageProps}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
