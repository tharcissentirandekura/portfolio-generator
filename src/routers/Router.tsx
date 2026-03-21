import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import WorkCaseStudy from '../pages/WorkCaseStudy';
import {About} from '../pages/About';
import { Research } from '../pages/Research';

/**
 * 
 * @returns The Router component that defines the routes of the application.
 */
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout />
        }
      />
      <Route
        path="/work/:slug"
        element={
          <WorkCaseStudy />
        }
      />

      <Route
        path='/about'
        element={
          <About />
        }
      />

      <Route
        path='/research'
        element={
          <Research />
        }
      />


    </Routes>
  );
};

export default Router;
