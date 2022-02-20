import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptodetails,
  Cryptocurrencies,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Cryptoverse</h1>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact index element={<Homepage />} />
              <Route exact path="exchanges" element={<Exchanges />} />
              <Route
                exact
                path="cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="crypto/:coinId" element={<Cryptodetails />} />
              <Route exact path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/"> Home </Link>
            <Link to="/exchanges"> Exchanges </Link>
            <Link to="/news"> News </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
