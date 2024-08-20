
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchThreads();

    const handleKeyDown = (event) => {
      if (event.key === 'd') {
       
      }
      if (event.key === 'r') {
        
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await axios.get('/onebox/list');
      console.log(response)
      setThreads(response.data);
    } catch (error) {
      console.error('Error fetching threads', error);
    }
  };

  const handleDelete = async (threadId) => {
    try {
      await axios.delete(`/onebox/${threadId}`);
      fetchThreads(); // Refresh the list
    } catch (error) {
      console.error('Error deleting thread', error);
    }
  };

  const handleReply = (threadId) => {
    // Navigate to reply editor with threadId
    navigate(`/reply/${threadId}`);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">Onebox</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} className="flex justify-between p-4 mb-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <span className="text-gray-800 dark:text-gray-100">{thread.title}</span>
            <div>
              <button
                className="px-4 py-2 mr-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(thread.id)}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
                onClick={() => handleReply(thread.id)}
              >
                Reply
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Onebox;
