import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentLoginPage from './pages/StudentLoginPage';
import EducatorLoginPage from './pages/EducatorLoginPage';


import StudentDashboard from './pages/StudentDashboard';
import EducatorDashboard from './pages/EducatorDashboard';


export default function AppRouter() {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/student-login" element={<StudentLoginPage />} />
       <Route path="/educator-login" element={<EducatorLoginPage />} />
       <Route path="/dashboard" element={<StudentDashboard />} />
       <Route path="/educator-dashboard" element={<EducatorDashboard />} />
     </Routes>
   </Router>
 );
}


