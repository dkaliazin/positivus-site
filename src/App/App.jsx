import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import UseCases from '../pages/UseCases/UseCases';
import Pricing from '../pages/Pricing/Pricing';
import Blog from '../pages/Blog/Blog';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;