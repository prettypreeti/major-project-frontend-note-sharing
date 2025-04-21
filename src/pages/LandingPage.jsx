import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';


export default function LandingPage() {
 const navigate = useNavigate();


 const handleLoginStudent = () => navigate('/student-login');
 const handleLoginEducator = () => navigate('/educator-login');


 return (
   <div
     className="d-flex justify-content-center align-items-center min-vh-100"
     style={{
       background: 'linear-gradient(to right, #001f3f, #003366)',
       color: '#FFD700',
       padding: '20px',
     }}
   >
     <div
       className="text-center p-5 rounded animate__animated animate__fadeInDown"
       style={{
         backdropFilter: 'blur(10px)',
         backgroundColor: 'rgba(255, 255, 255, 0.05)',
         border: '1px solid rgba(255, 255, 255, 0.1)',
         boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
         maxWidth: '700px',
         width: '100%',
       }}
     >
       <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
         Welcome to <span style={{ color: '#FFD700' }}>Coding Thinker</span>
       </h1>
       <p className="lead mb-5 animate__animated animate__fadeInUp animate__delay-2s">
         A Centralized Notes Sharing Platform for Students and Educators ✨
       </p>


       <div className="d-flex justify-content-center gap-4 animate__animated animate__fadeInUp animate__delay-3s">
         <button
           className="btn btn-outline-warning px-4 py-2 shadow-sm rounded-pill custom-btn"
           onClick={handleLoginStudent}
         >
           👨‍🎓 Login as Student
         </button>
         <button
           className="btn btn-outline-light px-4 py-2 shadow-sm rounded-pill custom-btn"
           onClick={handleLoginEducator}
         >
           👩‍🏫 Login as Educator
         </button>
       </div>
     </div>
   </div>
 );
}
