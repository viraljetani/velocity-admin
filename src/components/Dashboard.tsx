import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import type { DashboardProps } from '@/types/auth';

const Dashboard: React.FC<DashboardProps> = ({ onSignOut }) => {
  return (
    <Layout onSignOut={onSignOut}>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
