import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import Table from './components/pages/Table/Table.js';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.js';
function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
