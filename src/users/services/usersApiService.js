import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
  try {
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};


//   let data = JSON.stringify({
//     "email": userLogin.email,
//     "password": userLogin.email
//   });

//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: data
//   };

//   axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(apiUrl, normalizedUser);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
