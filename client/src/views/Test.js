// import React, { useState, useEffect } from 'react';

// const LocationComponent = () => {
//   const [location, setLocation] = useState({
//     latitude: null,
//     longitude: null,
//     error: null,
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             error: null,
//           });
//         },
//         (error) => {
//           setLocation((prev) => ({
//             ...prev,
//             error: error.message,
//           }));
//         }
//       );
//     } else {
//       setLocation((prev) => ({
//         ...prev,
//         error: 'Geolocation is not supported by this browser.',
//       }));
//     }
//   }, []);

//   return (
//     <div>
//       <h2>User Location</h2>
//       {location.error ? (
//         <p>Error: {location.error}</p>
//       ) : location.latitude && location.longitude ? (
//         <div>
//           <p>Latitude: {location.latitude}</p>
//           <p>Longitude: {location.longitude}</p>
//         </div>
//       ) : (
//         <p>Getting location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationComponent;
