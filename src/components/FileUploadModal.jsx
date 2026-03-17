import React, { useState } from 'react';

export default function FileUploadModal({ onClose, onUploaded }) {
  const [educatorName, setEducatorName] = useState('');
  const [batchName, setBatchName] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleUpload = async () => {
    if (!educatorName.trim() || !batchName.trim() || !fileUrl.trim()) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const uploadTime = new Date().toISOString();
    const note = { educatorName, batchName, fileUrl, uploadTime };

    // Save locally so uploads work even if remote backend is unavailable.
    try {
      const { saveNote } = await import("../utils/notesStorage");
      saveNote(note);
    } catch (e) {
      console.warn("Could not save note locally:", e);
    }

    try {
      const formData = new FormData();
      formData.append('educatorName', educatorName);
      formData.append('batchName', batchName);
      formData.append('fileUrl', fileUrl);
      formData.append('uploadTime', uploadTime);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw9RT8vQbRWg98-xsVmJguyiZ92j4R2mn3uUqHp99wkZQ8Nt4XSGTo5W7LbtRJfjFzH/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.warn("Upload request failed:", response.status, response.statusText);
        alert("Upload saved locally (remote upload failed).\nPlease check the backend configuration.");
        onUploaded?.();
        onClose();
        return;
      }

      const result = await response.json();
      if (result && result.success) {
        alert("Uploaded successfully!");
      } else {
        alert("Upload saved locally (remote upload returned an unexpected response).");
      }

      onUploaded?.();
      onClose();
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload saved locally (remote upload failed).");
      onUploaded?.();
      onClose();
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h5>Upload Notes</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Educator Name"
            value={educatorName}
            onChange={(e) => setEducatorName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Batch Name"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="File URL (e.g., Google Drive share link)"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleUpload}>
            Upload
          </button>
          <br />
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}