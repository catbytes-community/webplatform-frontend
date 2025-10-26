import '../styles/reset.css';
import '../styles/variables/global.css';
import '../styles/index.css';
import { Suspense, useEffect } from 'react';
import { AppRouter } from '../providers/Router';
import { useNavigate } from 'react-router-dom';
import NeatBackground from '../../shared/ui/NeatBackground/NeatBackground';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      console.log('Logging out user...');
      // Clear any frontend state (Redux, Context, etc.)
      navigate('/login'); // Redirect to login page
    };

    // Listen for logout event
    window.addEventListener('logout', handleLogout);

    return () => {
      window.removeEventListener('logout', handleLogout);
    };
  }, [navigate]);

  return (
    <>
      <NeatBackground />
      <Suspense fallback={<div>Loading...</div>}>
        {/* common layout */}
        <AppRouter />
        {/* common layout */}
      </Suspense>
    </>
  );
}

export default App;
