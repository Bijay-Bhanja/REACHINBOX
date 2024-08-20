
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

// Route to handle sending a reply
app.post('/reply/:thread_id', async (req, res) => {
  const { thread_id } = req.params;
  const { from, to, subject, body } = req.body;

  if (!from || !to || !subject || !body) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const apiResponse = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread_id}`, {
      from,
      to,
      subject,
      body,
    });

    return res.status(apiResponse.status).json(apiResponse.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  }
});


// Route to get the list of threads
app.get('/onebox/list', async (req, res) => {
    try {
      const apiResponse = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list');
      console.log(apiResponse)
      return res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } else {
        return res.status(500).json({ message: 'An error occurred while fetching the threads.' });
      }
    }
  });


  // Route to get a specific thread by ID
app.get('/onebox/:thread_id', async (req, res) => {
    const { thread_id } = req.params;
  
    try {
      const apiResponse = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/${thread_id}`);
      return res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } else {
        return res.status(500).json({ message: `An error occurred while fetching thread ${thread_id}.` });
      }
    }
  });


  // Route to delete a thread by ID
app.delete('/onebox/:thread_id', async (req, res) => {
    const { thread_id } = req.params;
  
    try {
      const apiResponse = await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/${thread_id}`);
      return res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } else {
        return res.status(500).json({ message: `An error occurred while deleting thread ${thread_id}.` });
      }
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
