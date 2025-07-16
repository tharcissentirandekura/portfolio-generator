import { BrowserRouter } from 'react-router-dom';
import Router from './routers/Router';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
/**
 * 
 * @returns The main component of the application that wraps
 *  the entire application with the ThemeContext provider and the BrowserRouter.
 */
const App = () => {
  return (

    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;