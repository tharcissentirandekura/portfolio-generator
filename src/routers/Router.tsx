import { Routes, Route } from 'react-router-dom';
import ExtracurricularActivities from '../pages/ExtracurricularActivities';
import MainLayout from '../layouts/MainLayout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/activities" element={<ExtracurricularActivities />} />
    </Routes>
  );
};

export default Router;
