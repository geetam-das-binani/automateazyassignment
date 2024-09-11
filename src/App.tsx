import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader  from './loader/Loader'
import { lazy, Suspense } from "react";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AllLeads = lazy(() => import("./pages/AllLeads"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/all-leads" element={<AllLeads />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
