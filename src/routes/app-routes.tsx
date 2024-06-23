import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  // ThreejsBasicsPage,
  VehiclesPage,
} from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/threejs-basics" element={<ThreejsBasicsPage />} /> */}
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
