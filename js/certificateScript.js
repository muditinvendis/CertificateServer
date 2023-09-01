// document.getElementById('certificate-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const siteId = document.getElementById('serverid').value;
//     const deviceId = document.getElementById('servername').value;
//     const serverIp = document.getElementById('portnumber').value;
  
//       localStorage.setItem('siteId', siteId);
//       localStorage.setItem('deviceId', deviceId);
//       localStorage.setItem('serverIp', serverIp);
  
//     const formData = {
//         siteId: siteId,
//         deviceId: deviceId,
//         serverIp: serverIp
//     };

//     fetch('http://localhost:3013/api/certificate', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.blob();
//         } else {
//             throw new Error('Failed to fetch certificate. Please try again.');
//         }
//     })
//     .then(blobData => {
//         const fileName = `Certificate_${siteId}_${deviceId}.ovpn`;
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blobData);
//         link.download = fileName;
//         link.style.display = 'none'; 
//         document.body.appendChild(link); 
//         link.click();
//         document.body.removeChild(link); 
//         URL.revokeObjectURL(link.href);
//         window.location.href = `successPage.html?siteId=${siteId}&deviceId=${deviceId}`;
//     })
//     .catch(error => {
//         console.error(error);
//         alert('Failed to fetch certificate. Please try again.');
//     });
//   });




// new

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('device-section').style.display = 'block';
//     document.getElementById('person-section').style.display = 'none';

//     document.querySelectorAll('input[name="form-type"]').forEach(function(radio) {
//       radio.addEventListener('change', function() {
//         if (this.value === 'device') {
//           document.getElementById('device-section').style.display = 'block';
//           document.getElementById('person-section').style.display = 'none';
//         } else if (this.value === 'person') {
//           document.getElementById('device-section').style.display = 'none';
//           document.getElementById('person-section').style.display = 'block';
//         }
//       });
//     });

//     document.getElementById('certificate-form').addEventListener('submit', function(e) {
//       e.preventDefault();
  
//       const siteId = document.getElementById('serverid').value;
//       const formData = {
//         siteId: siteId,
//       };
  
//       if (document.getElementById('device-radio').checked) {
//         const deviceType = document.getElementById('device-type').value;
//         const modelName = document.getElementById('model-name').value;
//         const deviceId = document.getElementById('device-id').value;
//         const customerName = document.getElementById('customer-name').value;
//         const projectType = document.getElementById('project-type').value;
  
//         formData.deviceType = deviceType;
//         formData.modelName = modelName;
//         formData.deviceId = deviceId;
//         formData.customerName = customerName;
//         formData.projectType = projectType;
//       } else if (document.getElementById('person-radio').checked) {
//         const personName = document.getElementById('person-name').value;
//         const projectName = document.getElementById('project-name').value;
//         const projectScope = document.querySelector('input[name="project-scope"]:checked').value;
  
//         formData.personName = personName;
//         formData.projectName = projectName;
//         formData.projectScope = projectScope;
//       }

//       localStorage.setItem('formData', JSON.stringify(formData));

//       setTimeout(function() {
//         alert('Form data:\n' + JSON.stringify(formData, null, 2));

//         document.getElementById('certificate-form').reset();
//         window.location.href = `successPage.html?siteId=${siteId}`;
//       }, 1000);
//     });
//   });
  

  
// document.getElementById('certificate-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const siteId = document.getElementById('serverid').value;
//   const formData = {
//     siteId: siteId,
//   };

//   if (document.getElementById('device-radio').checked) {
//     const deviceType = document.getElementById('device-type').value;
//     const modelName = document.getElementById('model-name').value;
//     const deviceId = document.getElementById('device-id').value;
//     const customerName = document.getElementById('customer-name').value;
//     const projectType = document.getElementById('project-type').value;

//     formData.deviceType = deviceType;
//     formData.modelName = modelName;
//     formData.deviceId = deviceId;
//     formData.customerName = customerName;
//     formData.projectType = projectType;
//   } else if (document.getElementById('person-radio').checked) {
//     const personName = document.getElementById('person-name').value;
//     const projectName = document.getElementById('project-name').value;
//     const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//     formData.personName = personName;
//     formData.projectName = projectName;
//     formData.projectScope = projectScope;
//   }

//   if ((formData.deviceType && formData.modelName && formData.deviceId && formData.customerName && formData.projectType) ||
//     (formData.personName && formData.projectName && formData.projectScope)) {
//     localStorage.setItem('formData', JSON.stringify(formData));

//     generateCertificate(siteId, formData.deviceId)
//       .then((certificateData) => {
//         const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//         const url = URL.createObjectURL(blob);

//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'certificate.ovpn';
//         a.click();

//         URL.revokeObjectURL(url);

//         document.getElementById('certificate-form').reset();
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Failed to generate certificate. Please try again.');
//       });
//   } else {
//     alert('Please fill either the Device or Person details along with Site ID and Server IP.');
//   }
// });

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         deviceId: deviceId,
//         siteId: siteId,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }



// document.getElementById('certificate-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const siteId = document.getElementById('serverid').value;
//   const formData = {
//     siteId: siteId,
//   };

//   if (document.getElementById('device-radio').checked) {
//     const deviceType = document.getElementById('device-type').value;
//     const modelName = document.getElementById('model-name').value;
//     const deviceId = document.getElementById('device-id').value;
//     const customerName = document.getElementById('customer-name').value;
//     const projectType = document.getElementById('project-type').value;

//     formData.deviceType = deviceType;
//     formData.modelName = modelName;
//     formData.deviceId = deviceId;
//     formData.customerName = customerName;
//     formData.projectType = projectType;
//   } else if (document.getElementById('person-radio').checked) {
//     const personName = document.getElementById('person-name').value;
//     const projectName = document.getElementById('project-name').value;
//     const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//     formData.personName = personName;
//     formData.projectName = projectName;
//     formData.projectScope = projectScope;
//   }

//   if ((formData.deviceType && formData.modelName && formData.deviceId && formData.customerName && formData.projectType) ||
//     (formData.personName && formData.projectName && formData.projectScope)) {
//     localStorage.setItem('formData', JSON.stringify(formData));

//     generateCertificate(siteId, formData.deviceId)
//       .then((certificateData) => {
//         const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//         const url = URL.createObjectURL(blob);

//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'certificate.ovpn';
//         a.click();

//         URL.revokeObjectURL(url);

//         document.getElementById('certificate-form').reset();
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Failed to generate certificate. Please try again.');
//       });
//   } else {
//     alert('Please fill either the Device or Person details along with Site ID and Server IP.');
//   }
// });

// async function generateCertificate(siteId, deviceId) {
//   const apiUrl = 'http://45.118.163.8:3013/generate_ovpn';

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         deviceId: deviceId,
//         siteId: siteId,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// function setInitialDisplayState() {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');
//   const deviceRadio = document.getElementById('device-radio');

//   if (deviceRadio.checked) {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// setInitialDisplayState();


// certificateScript.js 1

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     personSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// function setInitialDisplayState() {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');
//   const deviceRadio = document.getElementById('device-radio');

//   if (deviceRadio.checked) {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }

//   deviceSection.classList.remove('animation-scale-fade'); 
//   personSection.classList.remove('animation-scale-fade');
// }

// setInitialDisplayState();

// document.getElementById('certificate-form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const serverIp = document.getElementById('server-ip').value;
//   const formData = {
//     serverIp: serverIp,
//   };

//   if (document.getElementById('device-radio').checked) {
//     const siteId = document.getElementById('site-id').value;
//     const deviceType = document.getElementById('device-type').value;
//     const modelName = document.getElementById('model-name').value;
//     const deviceId = document.getElementById('device-id').value;
//     const customerName = document.getElementById('customer-name').value;
//     const projectType = document.getElementById('project-type').value;

//     formData.siteId = siteId;
//     formData.deviceType = deviceType;
//     formData.modelName = modelName;
//     formData.deviceId = deviceId;
//     formData.customerName = customerName;
//     formData.projectType = projectType;
//   } else if (document.getElementById('person-radio').checked) {
//     const personName = document.getElementById('person-name').value;
//     const projectName = document.getElementById('project-name').value;
//     const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//     formData.personName = personName;
//     formData.projectName = projectName;
//     formData.projectScope = projectScope;
//   }

//   if (
//     (formData.siteId &&
//       formData.deviceType &&
//       formData.modelName &&
//       formData.deviceId &&
//       formData.customerName &&
//       formData.projectType) ||
//     (formData.personName && formData.projectName && formData.projectScope)
//   ) {
//     localStorage.setItem('formData', JSON.stringify(formData));

//     generateCertificate(formData)
//       .then((certificateData) => {
//         downloadCertificate(certificateData, formData);
//         document.getElementById('certificate-form').reset();
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Failed to generate certificate. Please try again.');
//       });
//   } else {
//     alert('Please fill either the Device or Person details along with Site ID and Server IP.');
//   }
// });

// async function generateCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:3013/generate_ovpn`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }

// function downloadCertificate(certificateData, formData) {
//   const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = `Certificate_${formData.siteId}_${formData.deviceId}.ovpn`;
//   a.click();

//   URL.revokeObjectURL(url);
// }


// certificateScript.js 2

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     personSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// function setInitialDisplayState() {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');
//   const deviceRadio = document.getElementById('device-radio');

//   if (deviceRadio.checked) {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }

//   deviceSection.classList.remove('animation-scale-fade');
//   personSection.classList.remove('animation-scale-fade');
// }

// setInitialDisplayState();

// document.getElementById('certificate-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const serverIp = document.getElementById('server-ip').value;
//   const formType = document.querySelector('input[name="form-type"]:checked').value;

//   const formData = {
//     serverIp: serverIp,
//     formType: formType,
//   };

//   if (formType === 'device') {
//     const siteId = document.getElementById('site-id').value;
//     const deviceType = document.getElementById('device-type').value;
//     const modelName = document.getElementById('model-name').value;
//     const deviceId = document.getElementById('device-id').value;
//     const customerName = document.getElementById('customer-name').value;
//     const projectType = document.getElementById('project-type').value;

//     formData.siteId = siteId;
//     formData.deviceType = deviceType;
//     formData.modelName = modelName;
//     formData.deviceId = deviceId;
//     formData.customerName = customerName;
//     formData.projectType = projectType;
//   } else if (formType === 'person') {
//     const personName = document.getElementById('person-name').value;
//     const projectName = document.getElementById('project-name').value;
//     const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//     formData.personName = personName;
//     formData.projectName = projectName;
//     formData.projectScope = projectScope;
//   }

//   try {
//     const certificateData = await generateCertificate(formData);
//     downloadCertificate(certificateData, formData);
//     document.getElementById('certificate-form').reset();
//   } catch (error) {
//     console.error(error);
//     alert('Failed to generate certificate. Please try again.');
//   }
// });

// async function generateCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:3013/api/certificate`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate certificate:', error);
//     throw new Error('Failed to generate certificate. Please try again.');
//   }
// }

// function downloadCertificate(certificateData, formData) {
//   const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = `Certificate_${formData.siteId || formData.personName}_${formData.deviceId || formData.projectName}.ovpn`;
//   a.click();

//   URL.revokeObjectURL(url);
// }



// certificateScript 3 MAIN CODE

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     personSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// function setInitialDisplayState() {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');
//   const deviceRadio = document.getElementById('device-radio');

//   if (deviceRadio.checked) {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }

//   deviceSection.classList.remove('animation-scale-fade');
//   personSection.classList.remove('animation-scale-fade');
// }

// setInitialDisplayState();

// document.getElementById('certificate-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const serverIp = document.getElementById('server-ip').value;

//   if (document.getElementById('device-radio').checked) {
//     const siteId = document.getElementById('site-id').value;
//     const deviceType = document.getElementById('device-type').value;
//     const modelName = document.getElementById('model-name').value;
//     const deviceId = document.getElementById('device-id').value;
//     const customerName = document.getElementById('customer-name').value;
//     const projectType = document.getElementById('project-type').value;

//     const deviceFormData = {
//       serverIp: serverIp,
//       siteId: siteId,
//       deviceType: deviceType,
//       modelName: modelName,
//       deviceId: deviceId,
//       customerName: customerName,
//       projectType: projectType,
//     };

//     try {
//       const certificateData = await generateDeviceCertificate(deviceFormData);
//       downloadCertificate(certificateData, deviceFormData);
//       document.getElementById('certificate-form').reset();
//     } catch (error) {
//       console.error(error);
//       alert('Failed to generate device certificate. Please try again.');
//     }
//   } else if (document.getElementById('person-radio').checked) {
//     const personName = document.getElementById('person-name').value;
//     const projectName = document.getElementById('project-name').value;
//     const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//     const personFormData = {
//       serverIp: serverIp,
//       personName: personName,
//       projectName: projectName,
//       projectScope: projectScope,
//     };

//     try {
//       const certificateData = await generatePersonCertificate(personFormData);
//       downloadCertificate(certificateData, personFormData);
//       document.getElementById('certificate-form').reset();
//     } catch (error) {
//       console.error(error);
//       alert('Failed to generate person certificate. Please try again.');
//     }
//   }
// });

// async function generateDeviceCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:8000/api/getdcertificate/old/`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate device certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate device certificate:', error);
//     throw new Error('Failed to generate device certificate. Please try again.');
//   }
// }

// async function generatePersonCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:8000/api/getpcertificate/hello/`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate person certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     return certificateData;
//   } catch (error) {
//     console.error('Failed to generate person certificate:', error);
//     throw new Error('Failed to generate person certificate. Please try again.');
//   }
// }

// function downloadCertificate(certificateData, formData) {
//   const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = `Certificate_${formData.siteId || formData.personName}_${formData.deviceId || formData.projectName}.ovpn`;
//   a.click();

//   URL.revokeObjectURL(url);
// }



// CERTIFICATE SCRIPT 4 NEW CODE

// document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
//   radio.addEventListener('change', function (e) {
//     switchForm(e.target.value);
//   });
// });

// function switchForm(formType) {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');

//   if (formType === 'device') {
//     deviceSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else if (formType === 'person') {
//     personSection.classList.add('animation-scale-fade');
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }
// }

// function setInitialDisplayState() {
//   const deviceSection = document.getElementById('device-section');
//   const personSection = document.getElementById('person-section');
//   const deviceRadio = document.getElementById('device-radio');

//   if (deviceRadio.checked) {
//     deviceSection.style.display = 'block';
//     personSection.style.display = 'none';
//   } else {
//     deviceSection.style.display = 'none';
//     personSection.style.display = 'block';
//   }

//   deviceSection.classList.remove('animation-scale-fade');
//   personSection.classList.remove('animation-scale-fade');
// }

// setInitialDisplayState();

// document.getElementById('certificate-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const siteId = document.getElementById('site-id').value;
//   const deviceId = document.getElementById('device-id').value;
//   const serverIp = document.getElementById('server-ip').value;

//   const formData = {
//     siteId: siteId,
//     deviceId: deviceId,
//   };

//   try {
//     const response = await fetch('/api/certificate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch certificate. Please try again.');
//     }

//     const certificateData = await response.blob();
//     const fileName = `Certificate_${siteId}_${deviceId}.ovpn`;

//     const url = URL.createObjectURL(certificateData);
    
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = fileName;
//     link.style.display = 'none';
    
//     document.body.appendChild(link);
//     link.click();
    
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error(error);
//     alert('Failed to fetch certificate. Please try again.');
//   }
// });

document.querySelectorAll('input[name="form-type"]').forEach((radio) => {
  radio.addEventListener('change', function (e) {
    switchForm(e.target.value);
  });
});

function switchForm(formType) {
  const deviceSection = document.getElementById('device-section');
  const personSection = document.getElementById('person-section');

  if (formType === 'device') {
    deviceSection.classList.add('animation-scale-fade');
    deviceSection.style.display = 'block';
    personSection.style.display = 'none';
  } else if (formType === 'person') {
    personSection.classList.add('animation-scale-fade');
    deviceSection.style.display = 'none';
    personSection.style.display = 'block';
  }
}

function setInitialDisplayState() {
  const deviceSection = document.getElementById('device-section');
  const personSection = document.getElementById('person-section');
  const deviceRadio = document.getElementById('device-radio');

  if (deviceRadio.checked) {
    deviceSection.style.display = 'block';
    personSection.style.display = 'none';
  } else {
    deviceSection.style.display = 'none';
    personSection.style.display = 'block';
  }

  deviceSection.classList.remove('animation-scale-fade');
  personSection.classList.remove('animation-scale-fade');
}

setInitialDisplayState();

document.getElementById('certificate-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formType = document.querySelector('input[name="form-type"]:checked').value; // Get the currently selected form type

  if (formType === 'device') {
    const siteId = document.getElementById('site-id').value;
    const deviceId = document.getElementById('device-id').value;
    const serverIp = document.getElementById('server-ip').value;

    const formData = {
      siteId: siteId,
      deviceId: deviceId,
    };

    try {
      const response = await fetch('/api/certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch certificate. Please try again.');
      }

      const certificateData = await response.blob();
      const fileName = `Certificate_${siteId}_${deviceId}.ovpn`;

      const url = URL.createObjectURL(certificateData);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch certificate. Please try again.');
    }
  } else {
    // Handle the person section logic here, if needed
  }
});





// document.getElementById('certificate-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const serverIp = document.getElementById('server-ip').value;

//   if (document.getElementById('device-radio').checked) {
//       const siteId = document.getElementById('site-id').value;
//       const deviceType = document.getElementById('device-type').value;
//       const modelName = document.getElementById('model-name').value;
//       const deviceId = document.getElementById('device-id').value;
//       const customerName = document.getElementById('customer-name').value;
//       const projectType = document.getElementById('project-type').value;

//       const deviceFormData = {
//           serverIp: serverIp,
//           siteId: siteId,
//           deviceType: deviceType,
//           modelName: modelName,
//           deviceId: deviceId,
//           customerName: customerName,
//           projectType: projectType,
//       };

//       try {
//           const certificateData = await generateDeviceCertificate(deviceFormData);
//           downloadCertificate(certificateData, 'device_certificate.ovpn');
//           document.getElementById('certificate-form').reset();
//       } catch (error) {
//           console.error(error);
//           alert('Failed to generate device certificate. Please try again.');
//       }
//   } else if (document.getElementById('person-radio').checked) {
//       const personName = document.getElementById('person-name').value;
//       const projectName = document.getElementById('project-name').value;
//       const projectScope = document.querySelector('input[name="project-scope"]:checked').value;

//       const personFormData = {
//           serverIp: serverIp,
//           personName: personName,
//           projectName: projectName,
//           projectScope: projectScope,
//       };

//       try {
//           const certificateData = await generatePersonCertificate(personFormData);
//           downloadCertificate(certificateData, 'person_certificate.ovpn');
//           document.getElementById('certificate-form').reset();
//       } catch (error) {
//           console.error(error);
//           alert('Failed to generate person certificate. Please try again.');
//       }
//   }
// });

// async function generateDeviceCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:8000/api/getdcertificate/old/`;

//   try {
//       const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//           mode: 'cors',
//       });

//       if (!response.ok) {
//           throw new Error('Failed to generate device certificate. Please try again.');
//       }

//       const certificateData = await response.blob();
//       return certificateData;
//   } catch (error) {
//       console.error('Failed to generate device certificate:', error);
//       throw new Error('Failed to generate device certificate. Please try again.');
//   }
// }

// async function generatePersonCertificate(formData) {
//   const apiUrl = `http://${formData.serverIp}:8000/api/getpcertificate/hello/`;

//   try {
//       const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//           mode: 'cors',
//       });

//       if (!response.ok) {
//           throw new Error('Failed to generate person certificate. Please try again.');
//       }

//       const certificateData = await response.blob();
//       return certificateData;
//   } catch (error) {
//       console.error('Failed to generate person certificate:', error);
//       throw new Error('Failed to generate person certificate. Please try again.');
//   }
// }

// function downloadCertificate(certificateData, filename) {
//   const blob = new Blob([certificateData], { type: 'application/octet-stream' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = filename;
//   a.click();

//   URL.revokeObjectURL(url);
// }