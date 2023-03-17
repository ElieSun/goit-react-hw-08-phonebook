import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main style={{padding: '60px 20px'}}>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};