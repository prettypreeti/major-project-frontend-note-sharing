import React from 'react';


export default function FileList({ notes }) {
 if (!notes || notes.length === 0) {
   return <p>No notes available yet.</p>;
 }


 return (
   <div className="row">
     {notes.map((note, index) => (
       <div key={index} className="col-md-4 mb-3">
         <div className="card p-3 shadow-sm h-100">
           <h6 className="text-primary">{note.batchName}</h6>
           <p className="mb-1">By: <strong>{note.educatorName}</strong></p>
           <p className="text-muted" style={{ fontSize: '0.85rem' }}>
             Uploaded: {new Date(note.uploadTime).toLocaleString()}
           </p>
           <a
             href={note.fileUrl}
             target="_blank"
             rel="noreferrer"
             className="btn btn-outline-primary mt-auto"
           >
             Download
           </a>
         </div>
       </div>
     ))}
   </div>
 );
}


