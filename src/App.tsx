import React from 'react';
import AppRoutes from './routes/app-routes';
import './App.css';
import { VehiclesProvider } from './contexts';

import "react-color-palette/css";

const App: React.FC = () => {
  return (
    <div className="App">
      <VehiclesProvider>
        <AppRoutes />
      </VehiclesProvider>
    </div>
  );
};

export default App;
