import React, { Suspense } from 'react';
import { BrowserRouter as Browser, Routes, Route, Navigate } from 'react-router-dom';

import Header from '@/components/Header';

const Gallery = React.lazy(() => import('@/components/Gallery'));
function App() {

  return (
    <div className='App '>
      <Header />
      <div className='p-[40px] pt-40 flex justify-center'>
        <Browser>
          <Suspense fallback={<div className='h-screen text-white'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Navigate to='/gallery' />} />
              <Route path='gallery' element={<Gallery />} />
            </Routes>
          </Suspense>
        </Browser>
      </div>
    </div>
  );
}

export default App;
