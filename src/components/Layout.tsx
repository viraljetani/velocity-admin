import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import type { LayoutProps } from '@/types/auth';

const Layout: React.FC<LayoutProps> = ({ children, onSignOut }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onSignOut={onSignOut} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
