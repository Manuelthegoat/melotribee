import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <>
      {/* <div id="loading">
        <div class="loader simple-loader">
            <div class="loader-body ">
                <img src="./assets/images/loader.gif" alt="loader" class=" img-fluid " />
            </div>
        </div>
        </div> */}
      <Sidebar />
      <main class="main-content">
        <Header />
      </main>
    </>
  );
};

export default App;
