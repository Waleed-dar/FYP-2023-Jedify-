import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export const ProfileImage = {}; // Shared profile image object

const ManageProfile = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (preview) {
      ProfileImage[0] = preview; // Update ProfileImage when preview changes
      console.log('Profile image updated:', ProfileImage[0]);
    }
  }, [preview]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      ProfileImage[0] = preview; // Save the profile image
      navigate(-1); // Go back to the dashboard or home page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="App-header bg-blue-600 p-4 text-white w-full text-center">
        <h1 className="text-3xl font-bold">Update Profile Picture</h1>
      </header>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Manage Profile</h1>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button 
          onClick={handleUpload} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Upload
        </button>
        {preview && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Preview</h2>
            <img 
              src={preview} 
              alt="Profile Preview" 
              className="w-48 h-48 rounded-full mx-auto"
            />
          </div>
        )}
        <button onClick={()=> navigate(-1)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-5"
        >
          Back
        </button>
      </div>
      
    </div>
  );
};

export default ManageProfile;
