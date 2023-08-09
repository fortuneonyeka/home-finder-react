import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import Website from "./pages/Website";
import Properties from "./pages/properties/Properties";

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading ....</div>}>

      <Routes>
        <Route element={<Layout />}>

        <Route path="/" element={<Website />} />
        <Route path="/properties" element={<Properties />} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
