import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
