
import React, { useState } from 'react';

const CustomEditor = ({ onSave, onAddVariable }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(content);
  };

  const handleAddVariable = () => {
    const variable = prompt("Enter variable name:");
    if (variable) {
      setContent(content + `{{${variable}}}`);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <div className="mb-4">
        <textarea
          className="w-full h-40 p-2 bg-white border rounded-lg shadow-lg dark:bg-gray-800"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 mr-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={handleSave}
      >
        SAVE
      </button>
      <button
        className="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        onClick={handleAddVariable}
      >
        Variables
      </button>
    </div>
  );
};

export default CustomEditor;
