import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from './components/layout/Layout';
import { Home } from './components/body/Home';
import { PlaceDetailsCard } from './components/placedetailsinfo/PlaceDetailsCard';;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='details' element={<PlaceDetailsCard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
