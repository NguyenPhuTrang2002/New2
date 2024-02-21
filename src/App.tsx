import React, { ComponentType } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component as ComponentType<any>; // Sử dụng phép ép kiểu để xác định kiểu dữ liệu
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;