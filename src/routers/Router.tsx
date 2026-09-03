import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import Academics from '../pages/Academics';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CourseExperience from '../pages/CourseExperience';
import Home from '../pages/Home';
import Perspective from '../pages/Perspective';
import Work from '../pages/Work';
import WorkCaseStudy from '../pages/WorkCaseStudy';

const Router = () => (
  <Routes>
    <Route element={<SiteLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<WorkCaseStudy />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/academics/:courseId" element={<CourseExperience />} />
      <Route path="/about" element={<About />} />
      <Route path="/perspectives/:slug" element={<Perspective />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default Router;
