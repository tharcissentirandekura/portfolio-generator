import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { MotionConfig } from 'framer-motion';

/**
 * Main App component that provides theme context and routing
 * @returns The root application component
 */
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MotionConfig reducedMotion="always">
          <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
            <Navbar />
            <main className="relative">
              <Router />
            </main>
          </div>
        </MotionConfig>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;