import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LogColumn from "./LogColumn";

export default function App() {
  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <LogColumn />
        <Footer />
      </div>
    </div>
  );
}
