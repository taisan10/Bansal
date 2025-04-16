import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Homepage";
import ServicesPage from "./Page/Service";
import ForCompanies from "./Page/CompaniesPage";
import JobSeekers from "./Page/Job";
import ContactPage from "./Page/Contact"; // or wherever it's located

import "./App.css";
import Navbar from "./Components/homepage/Navbar";
import Footer from "./Components/homepage/Footer";

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/companies" element={<ForCompanies />} />
      <Route path="/job-seekers" element={<JobSeekers />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer/>
    </>
  );
}


export default App;
