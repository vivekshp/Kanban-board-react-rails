import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BoardProvider } from './context/BoardContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AppLayout from './layouts/AppLayout';
import Boards from './pages/boards/Boards';
import BoardShow from './pages/boards/BoardShow';
import Invites from './pages/invites/Invites';
import History from './pages/history/History';
import HistoryContainer from './HistoryContainer';
import './index.css'
import { registerApplication, start, navigateToUrl } from "single-spa";
import { useEffect } from 'react';



export default function App() {

   useEffect(() => {
  registerApplication({
    name: "@pramata/history-ui",
    app: () => System.import("@pramata/history-ui"),
    activeWhen: "/history",
    customProps: {},
  });

  start();
}, []);


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout><Login /></AppLayout>} path="/login" />
          <Route element={<AppLayout><Register /></AppLayout>} path="/register" />
          <Route element={<AppLayout><ProtectedRoutes /></AppLayout>}>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Boards/>}/>
            <Route path="/boards/:id" element={
              <BoardProvider>
                <BoardShow />
              </BoardProvider>
            } />
             <Route path="/invites" element={<Invites />} />
             <Route path="/history" element={<HistoryContainer />} />
          </Route>
          <Route path="*" element={<AppLayout><Login /></AppLayout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}