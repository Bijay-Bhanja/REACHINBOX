
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomEditor from './CustomEditor';

const Reply = () => {
  const { thread_id } = useParams();

  const handleSave = async (content) => {
    try {
      await axios.post(`/reply/${thread_id}`, {
        from: 'your_email@example.com',
        to: 'recipient_email@example.com',
        subject: 'Re: Subject',
        body: content,
      });
      // Navigate back to onebox after sending
    } catch (error) {
      console.error('Error sending reply', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">Reply to Thread</h1>
      <CustomEditor onSave={handleSave} />
    </div>
  );
};

export default Reply;
