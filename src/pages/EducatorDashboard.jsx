import React, { useEffect, useState } from 'react';
import FileUploadModal from '../components/FileUploadModal';
import FileList from '../components/FileList';
import { getStoredNotes } from '../utils/notesStorage';


export default function EducatorDashboard() {
 const [showModal, setShowModal] = useState(false);
 const [notes, setNotes] = useState([]);
 const educatorName = localStorage.getItem('educatorName');
 const userId = localStorage.getItem('userId');

 const refreshNotes = () => setNotes(getStoredNotes());

 useEffect(() => {
   refreshNotes();
 }, []);

 if (!userId) return <div className="text-center text-warning mt-5">⚠️ Please log in to continue</div>;

 return (
   <div
     className="min-vh-100 d-flex flex-column align-items-center"
     style={{
       background: 'linear-gradient(to bottom right, #001f3f, #003366)',
       color: '#FFD700',
       padding: '40px 20px',
     }}
   >
     <div className="w-100 text-center mb-4">
     <h2 className="fw-bold">Welcome back, {educatorName || userId} 🎓</h2>


       <p className="lead">Upload and manage your notes effortlessly.</p>
     </div>


     <div className="w-100" style={{ maxWidth: '800px' }}>
       <FileList notes={notes} />
     </div>
     <button
       className="btn btn-outline-warning rounded-circle shadow-lg"
       style={{
         position: 'fixed',
         bottom: '30px',
         right: '30px',
         width: '70px',
         height: '70px',
         fontSize: '32px',
         fontWeight: 'bold',
       }}
       onClick={() => setShowModal(true)}
       aria-label="Upload"
       title="Upload Notes"
     >
       +
     </button>


     {/* Modal */}
     {showModal && (
       <FileUploadModal
         onClose={() => setShowModal(false)}
         onUploaded={refreshNotes}
       />
     )}
   </div>
 );
}

