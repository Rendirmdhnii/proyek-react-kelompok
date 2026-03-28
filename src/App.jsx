import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RendyProfile from './pages/RendyProfile';
import KrisnaProfile from './pages/KrisnaProfile';
import DesbelionProfile from './pages/DesbelionProfile';
import SofyanProfile from './pages/SofyanProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama untuk navigasi */}
        <Route path="/" element={
          <div className="p-10 text-center bg-slate-900 min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-8">Project Kelompok React</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/rendy" className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700">Profil Rendy</Link>
              <Link to="/krisna" className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700">Profil Krisna</Link>
              <Link to="/desbelion" className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700">Profil Desbelion</Link>
              <Link to="/sofyan" className="bg-orange-600 px-6 py-3 rounded-xl hover:bg-orange-700">Profil Sofyan</Link>
            </div>
          </div>
        } />

        {/* Jalur URL masing-masing sesuai instruksi */}
        <Route path="/rendy" element={<RendyProfile />} />
        <Route path="/krisna" element={<KrisnaProfile />} />
        <Route path="/desbelion" element={<DesbelionProfile />} />
        <Route path="/sofyan" element={<SofyanProfile />} />
      </Routes>
    </Router>
  );
}

export default App;