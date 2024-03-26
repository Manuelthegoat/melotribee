import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Genres from "./Components/Genres";

const App = () => {
  return (
    <>
      <Sidebar />
      <main class="main-content">
        <Header />
        <div class="content-inner container-fluid pb-0" id="page_layout">
          <Genres />
        </div>
      </main>
    </>
  );
};

export default App;
