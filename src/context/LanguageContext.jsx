import React, { createContext, useState, useContext, useEffect } from "react";
const vi = require("../locale/vi.json");
const en = require("../locale/en.json");
const zh = require("../locale/zh.json");


const LanguageContext = createContext();
const translations = { vi, en, zh };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "vi"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) =>
    key.split(".").reduce((obj, k) => (obj || {})[k], translations[language]) ||
    key;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslate = () => useContext(LanguageContext);
