import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Typography from './components/Typography';
import type { AppContentProps } from '@/types/auth';
import './App.css';

const ProtectedRoute = ({ children, isAuthenticated }: { children: JSX.Element, isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    // Clear any stored tokens here (e.g., localStorage.removeItem('authToken'))
  };

  return (
    <BrowserRouter>
      <AppContent isAuthenticated={isAuthenticated} handleSignInSuccess={handleSignInSuccess} handleSignOut={handleSignOut} />
    </BrowserRouter>
  );
}

function AppContent({ isAuthenticated, handleSignInSuccess, handleSignOut }: AppContentProps) {
  const navigate = useNavigate();

  const signOutAndNavigate = () => {
    handleSignOut();
    navigate('/sign-in');
  };

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn onSignInSuccess={handleSignInSuccess} />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard onSignOut={signOutAndNavigate} />
          </ProtectedRoute>
        }
      >
        <Route index element={<div>Dashboard Content</div>} />
        <Route path="typography" element={<Typography />} />
        <Route path="profile" element={<div>Profile Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
