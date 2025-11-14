export interface User {
  email: string;
  password: string;
}

export interface AppContentProps {
  isAuthenticated: boolean;
  handleSignInSuccess: () => void;
  handleSignOut: () => void;
}

export interface DashboardProps {
  onSignOut: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
  onSignOut: () => void;
}
