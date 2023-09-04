// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const port = 3013;

// app.use(cors()); 
// app.use(bodyParser.json());
// app.use(express.static(__dirname));
// app.use(bodyParser.json());

// app.post('/api/certificate', async (req, res) => {
//     const { siteId, deviceId } = req.body;

//     try {
//         const certificateData = await generateCertificate(siteId, deviceId);
        
//         res.setHeader('Content-Type', 'application/octet-stream');
//         res.setHeader('Content-Disposition', 'attachment; filename="certificate.ovpn"');
//         res.send(certificateData);
//     } catch (error) {
//         console.error('Failed to fetch certificate:', error);
//         res.status(500).send('Failed to fetch certificate. Please try again.');
//     }
// });

// app.get('/signupPage.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'signupPage.html'));
// });

// app.get('/loginPage.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'loginPage.html'));
// });

// app.get('/certificatePage.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'certificatePage.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

//     async function generateCertificate(siteId, deviceId) {
//         const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//         try {
//             const response = await axios.post(apiUrl, {
//                 deviceId: deviceId,
//                 siteId: siteId,
//             }, {
//                 responseType: 'arraybuffer'
//             });
            
//             return response.data;
//         } catch (error) {
//             console.error('Failed to generate certificate:', error);
//             throw new Error('Failed to generate certificate. Please try again.');
//         }
//     }


// server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const port = 3013;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(__dirname));
// app.use(bodyParser.json());

// app.options('/api/certificate', cors());

// app.post('/api/certificate', async (req, res) => {
//   const { siteId, deviceId } = req.body;

//   try {
//     const certificateData = await generateCertificate(siteId, deviceId);

//     res.setHeader('Content-Type', 'application/octet-stream');
//     res.send(certificateData);
//   } catch (error) {
//     console.error('Failed to fetch certificate:', error);
//     res.status(500).send('Failed to fetch certificate. Please try again.');
//   }
// });

// app.get('/signupPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'signupPage.html'));
// });

// app.get('/loginPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'loginPage.html'));
// });

// app.get('/certificatePage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'certificatePage.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         deviceId: deviceId,
//         siteId: siteId,
//       },
//       {
//         responseType: 'arraybuffer',
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }

// this is my 2nd code without signup page api

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const cors = require('cors'); 

// const app = express();
// const port = 3013;

// app.use(cors());

// app.use(bodyParser.json());
// app.use(express.static(__dirname));
// app.use(bodyParser.json());

// // Handle the CORS preflight request for the /api/certificate endpoint
// app.options('/api/certificate', cors());

// app.post('/api/certificate', async (req, res) => {
//   const { siteId, deviceId } = req.body;

//   try {
//     const certificateData = await generateCertificate(siteId, deviceId);

//     res.setHeader('Content-Type', 'application/octet-stream');
//     // Remove the following line to avoid conflicts with dynamically generated filename
//     // res.setHeader('Content-Disposition', 'attachment; filename="certificate.ovpn"');
//     res.send(certificateData);
//   } catch (error) {
//     console.error('Failed to fetch certificate:', error);
//     res.status(500).send('Failed to fetch certificate. Please try again.');
//   }
// });

// app.get('/signupPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'signupPage.html'));
// });

// app.get('/loginPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'loginPage.html'));
// });

// app.get('/certificatePage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'certificatePage.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         deviceId: deviceId,
//         siteId: siteId,
//       },
//       {
//         responseType: 'arraybuffer',
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }




// code for the signup API response


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const cors = require('cors'); 

// const app = express();
// const port = 3013;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(__dirname));
// app.use(bodyParser.json());

// app.options('/api/certificate', cors());

// app.post('/api/certificate', async (req, res) => {
//   const { siteId, deviceId } = req.body;

//   try {
//     const certificateData = await generateCertificate(siteId, deviceId);

//     res.setHeader('Content-Type', 'application/octet-stream');
//     res.send(certificateData);
//   } catch (error) {
//     console.error('Failed to fetch certificate:', error);
//     res.status(500).send('Failed to fetch certificate. Please try again.');
//   }
// });

// app.get('/signupPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'signupPage.html'));
// });

// app.get('/loginPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'loginPage.html'));
// });

// app.get('/certificatePage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'certificatePage.html'));
// });

// app.post('/api/signup/', (req, res) => {
//   const { username, email, phone_number, password, confirm_password, web_terms, dataprocessing, subscription } = req.body;

//   const response = {
//     success: true,
//     message: 'User registered successfully!',
//   };

//   res.json(response);
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         deviceId: deviceId,
//         siteId: siteId,
//       },
//       {
//         responseType: 'arraybuffer',
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }



// code for the sign-in and sign-up api response

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const cors = require('cors'); 

// const app = express();
// const port = 3013;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(__dirname));
// app.use(bodyParser.json());

// app.options('/api/certificate', cors());

// app.post('/api/certificate', async (req, res) => {
//   const { siteId, deviceId } = req.body;

//   try {
//     const certificateData = await generateCertificate(siteId, deviceId);

//     res.setHeader('Content-Type', 'application/octet-stream');
//     res.send(certificateData);
//   } catch (error) {
//     console.error('Failed to fetch certificate:', error);
//     res.status(500).send('Failed to fetch certificate. Please try again.');
//   }
// });

// app.get('/signupPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'signupPage.html'));
// });

// app.get('/loginPage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'loginPage.html'));
// });

// app.get('/certificatePage.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'certificatePage.html'));
// });

// app.post('/api/signup/', (req, res) => {
//   const { username, email, phone_number, password, confirm_password, web_terms, dataprocessing, subscription } = req.body;


  
//   const response = {
//     success: true,
//     message: 'User registered successfully!',
//   };

//   res.json(response);
// });

// app.post('/api/signin/', (req, res) => {
//   // Handle sign-in logic here
//   const { nameEmailPhone, password } = req.body;

//   // For demonstration purposes, assume successful sign-in
//   const response = {
//     success: true,
//     message: 'User signed in successfully!',
//   };

//   res.json(response);
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         deviceId: deviceId,
//         siteId: siteId,
//       },
//       {
//         responseType: 'arraybuffer',
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3013;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/certificate', async (req, res) => {
  const { siteId, deviceId } = req.body;

  try {
    const certificateData = await generateCertificate(siteId, deviceId);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(certificateData);
  } catch (error) {
    console.error('Failed to fetch certificate:', error);
    res.status(500).send('Failed to fetch certificate. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/certificatePage.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'certificatePage.html'));
});
async function generateCertificate(siteId, deviceId) {
  const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

  try {
    const response = await axios.post(
      apiUrl,
      {
        deviceId: deviceId,
        siteId: siteId,
      },
      {
        responseType: 'arraybuffer',
      }
    );

    return response.data;
  } catch (error) {
    console.error('Failed to generate certificate:', error);
    throw new Error('Failed to generate certificate. Please try again.');
  }
}
