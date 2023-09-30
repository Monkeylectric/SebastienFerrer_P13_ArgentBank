// import axios from "axios";

// export const userLogin = async (userEmail, userPassword) => {
//     try {
//         const response = await axios.post(`http://localhost:3001/api/v1/user/login`, {
//             email: userEmail,
//             password: userPassword
//         });

//         if (response.status === 200) {
//             // console.log(response.data);
//             return response.data;
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// export const userProfile = async (token) => {
//     try {
//         const response = await axios.post(`http://localhost:3001/api/v1/user/profile`, {}, {
//             headers: {
//               'Authorization': `Bearer ${token}` 
//             }
//         });

//         if (response.status === 200) {
//             // console.log(response.data);
//             return response.data;
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// export const userUpdateProfile = async (firstName, lastName, token) => {
//     try {
//         const response = await axios.put(`http://localhost:3001/api/v1/user/profile`, {
//             firstName: firstName,
//             lastName: lastName
//         }, {
//             headers: {
//               'Authorization': `Bearer ${token}` 
//             }
//         });

//         if (response.status === 200) {
//             // console.log(response.data);
//             return response.data;
//         }
//     } catch (error) {
//         throw error;
//     }
// }