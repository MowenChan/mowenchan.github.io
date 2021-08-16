import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import BarCounter from "../components/BarCounter.js"

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      className={clsx("--ifm-color-primary")}
      title={translate({ message: "Welcome to my blog", id: "head.title" })}
      description="Description will go into a meta tag in <head />"
    >
      <header>
        <BarCounter/>
      </header>

      <main></main>
    </Layout>
  );
}