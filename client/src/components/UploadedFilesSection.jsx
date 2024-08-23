import React, { useEffect, useState } from 'react';

const UploadedFilesSection = () => {
  const [files, setFiles] = useState([]);

  // Fetch uploaded files from the backend
  useEffect(() => {
    fetch('/api/files')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  // Function to delete a file
  const deleteFile = (id) => {
    fetch(`/api/files/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Update state to remove the deleted file
        setFiles(files.filter(file => file._id !== id));
      })
      .catch(error => console.error('Error deleting file:', error));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl 
          text-center mt-5 font-bold">Already Uploaded Data</h1>

      <div className="mt-8">
        {files.length > 0 ? (
          <ul>
            {files.map((file) => (
              <li key={file._id} className="flex justify-between items-center border-b-2 py-4">
                <span className="text-lg">{file.name}</span>
                <button 
                  onClick={() => deleteFile(file._id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadedFilesSection;
