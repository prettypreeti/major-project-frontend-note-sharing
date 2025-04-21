import React, { useEffect, useState } from 'react';
import FileList from '../components/FileList';


export default function StudentDashboard() {
 const userId = localStorage.getItem('userId');
 const studentName = localStorage.getItem('studentName');
 const [notes, setNotes] = useState([]);


 useEffect(() => {
   fetch("https://script.google.com/macros/s/AKfycbzvzUUB-LGGzjLtp-a9vHlaot7Kt_DuIVB0qLbtdnFzJiN9eTD7UmivjZb6xQ1LdXO3/exec")
     .then((res) => res.json())
     .then((data) => {
       setNotes(data);
     });
 }, []);


 if (!userId)
   return (
     <div className="text-center text-warning mt-5">
       ⚠️ Please log in to continue
     </div>
   );


 return (
   <div
     className="min-vh-100 py-5"
     style={{
       background: 'linear-gradient(to bottom right, #001f3f, #003366)',
       color: '#FFD700',
     }}
   >
     <div className="container animate__animated animate__fadeIn">
       <div className="text-center mb-5">
       <h2 className="fw-bold">Welcome, {studentName || userId} 🎓</h2>


         <p className="lead">Explore all uploaded notes below</p>
       </div>


       <div className="row">
         {notes.length === 0 ? (
           <div className="text-center text-light">
             <em>No notes available right now. Check back later!</em>
           </div>
         ) : (
           notes.map((note, index) => (
             <div
               key={index}
               className="col-md-4 mb-4 animate__animated animate__zoomIn"
             >
               <div
                 className="card h-100 shadow-lg border-0"
                 style={{
                   backgroundColor: '#002b5c',
                   color: '#FFD700',
                 }}
               >
                 <div className="card-body">
                   <h5 className="card-title">{note.batchName}</h5>
                   <p className="card-text mb-1">
                     <strong>By:</strong> {note.educatorName}
                   </p>
                   <p className="card-text">
                     <small>{note.uploadTime}</small>
                   </p>
                 </div>
                 <div className="card-footer bg-transparent border-0">
                   <a
                     href={note.fileUrl}
                     target="_blank"
                     rel="noreferrer"
                     className="btn btn-outline-warning w-100"
                   >
                     📥 Download
                   </a>
                 </div>
               </div>
             </div>
           ))
         )}
       </div>
     </div>
   </div>
 );
}


