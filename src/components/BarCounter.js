import React, { useEffect, useState } from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import Translate from "@docusaurus/Translate";
import BarCounterCss from "./BarCounter.module.css";

export default function BarCounter() {
	const [season, setSeason] = useState(new Date().getMonth());
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  return (
    <div
      className={
        BarCounterCss["hero-bg-summer"] + " " + BarCounterCss["bar-counter"]
      }
    >
      <div className={BarCounterCss["hero-bar-left"]}></div>
      <div className={BarCounterCss["hero-bar-middle"]}>
        <h1>Baku</h1>
        <h2>🍺Public House</h2>
        <h3>
          <Translate id="hero_greeting" />
        </h3>
        <h4>
          <Translate id="hero_last_update" />
        </h4>
      </div>
      <div className={BarCounterCss["hero-bar-right"]}></div>
    </div>
  );
}
