import { useEffect, useState } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    console.log("Dark mode: ", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then(() => console.log("Bootstrap JS loaded successfully"))
        .catch((err) => console.log("Bootstrap JS load error", err));
    }
  }, []);

  return (
    <Component
      {...pageProps}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
