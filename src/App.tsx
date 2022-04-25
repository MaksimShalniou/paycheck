import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation("common");

  return <div>{t("hello")}</div>;
}

export default App;
