// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Componentes de layout
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/Props";

function App() {
  return (
    <HashRouter>
      {/* Header */}
      <Header />

      {/* Sección principal: imágenes que aparecen al abrir el link */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Mis dulces favoritos</h1>
        <img
          src="/React/img/paleta-arcoiris.png"
          alt="Paleta arcoiris"
          style={{ width: "200px", margin: "10px" }}
        />
        <img
          src="/React/img/cupcake-vainilla.png"
          alt="Cupcake vainilla"
          style={{ width: "200px", margin: "10px" }}
        />
        <img
          src="/React/img/mini-donitas.jpg"
          alt="Mini donitas"
          style={{ width: "200px", margin: "10px" }}
        />
        <img
          src="/React/img/gomita-fresa-mix.png"
          alt="Gomita fresa"
          style={{ width: "200px", margin: "10px" }}
        />
        <img
          src="/React/img/galleta-chocochips.png"
          alt="Galleta ChocoChips"
          style={{ width: "200px", margin: "10px" }}
        />
        <img
          src="/React/img/chocobarra.png"
          alt="Chocobarra"
          style={{ width: "200px", margin: "10px" }}
        />
      </div>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </HashRouter>
  );
}

export default App;