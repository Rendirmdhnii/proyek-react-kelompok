import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RendyProfile from './pages/RendyProfile';
import KrisnaProfile from './pages/KrisnaProfile';
import DesbelionProfile from './pages/DesbelionProfile';
import SofyanProfile from './pages/SofyanProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="p-10 text-center bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-black mb-8 tracking-tighter uppercase italic">
              Project <span className="text-blue-500">Kelompok</span> React
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/rendy" className="group relative px-8 py-4 bg-blue-600 rounded-xl overflow-hidden transition-all hover:scale-105">
                <span className="relative font-bold uppercase tracking-widest">PROFIL RENDY</span>
              </Link>
              <Link to="/krisna" className="bg-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all uppercase tracking-widest">PROFIL KRISNA</Link>
              <Link to="/desbelion" className="bg-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all uppercase tracking-widest">PROFIL DESBELION</Link>
              <Link to="/sofyan" className="bg-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all uppercase tracking-widest">PROFIL SOFYAN</Link>
            </div>
          </div>
        } />

        <Route path="/rendy" element={<RendyProfile />} />

        <Route path="/krisna" element={<KrisnaProfile />} />
        <Route path="/desbelion" element={<DesbelionProfile />} />
        <Route path="/sofyan" element={<SofyanProfile />} />
      </Routes>
    </Router>
  );
}

export default App;