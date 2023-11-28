import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
