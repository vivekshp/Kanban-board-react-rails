import Navbar from '../components/navbar/Navbar';
import GlobalSearch from '../components/globalsearch/GlobalSearch';
import { useAuth } from '../context/AuthContext';
import React from 'react';
export default function AppLayout({ children }) {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      {user && <GlobalSearch />}
      <main className="container">{children}</main>
    </>
  );
}