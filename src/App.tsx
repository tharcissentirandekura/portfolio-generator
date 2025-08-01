import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Main App component that provides theme context and routing
 * @returns The root application component
 */
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
          <Navbar />
          <main className="relative">
            <Router />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;