import { useEffect, useState } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";

    console.log("Dark mode:", darkMode);
  }, [darkMode]);

  return (
    <Component
      {...pageProps}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}