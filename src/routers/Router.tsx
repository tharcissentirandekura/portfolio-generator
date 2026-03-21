import { Routes, Route } from 'react-router-dom';
// import ExtracurricularActivities from '../pages/ExtracurricularActivities';
import MainLayout from '../layouts/MainLayout';
import WorkCaseStudy from '../pages/WorkCaseStudy';

/**
 * 
 * @returns The Router component that defines the routes of the application.
 */
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/work/:slug" element={<WorkCaseStudy />} />
      {/* <Route path="/activities" element={<ExtracurricularActivities />} /> */}
    </Routes>
  );
};

export default Router;
