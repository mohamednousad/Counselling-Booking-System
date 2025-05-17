import React, { useEffect } from "react";
import { MAINTENANCE_MODE } from "./config";
import RoutesPage from "./routes";

function App() {
  useEffect(() => {
    if (MAINTENANCE_MODE) {
      window.location.href = '/maintenance.html';
    }
  }, []);

  return <RoutesPage />;
}

export default App;