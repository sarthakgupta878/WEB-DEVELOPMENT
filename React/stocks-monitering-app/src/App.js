
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';
import { WatchlistContextProvider } from './context/WatchlistContext';
import React from 'react';

function App() {
  
  return (
    <main className='container'>

      <WatchlistContextProvider>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StockOverviewPage/>} />
        <Route path='/detail/:symbol' element={<StockDetailPage/>} />
      </Routes>
      </BrowserRouter>
      </WatchlistContextProvider>

    </main>
  );
}

export default App;
