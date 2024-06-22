import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  ThreejsBasicsPage,
} from '../pages';
import { Canvas } from '@react-three/fiber';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/threejs-basics" element={
          <div className="canvas-block">
            <Canvas>
              <ThreejsBasicsPage />
            </Canvas>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
