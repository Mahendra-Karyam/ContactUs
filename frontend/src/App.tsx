import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUsPage.tsx";
import ThankYou from "./ThankYou.tsx";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ContactUs />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </>
  );
}
