const { apiRequest } = require(".");

export const RegisterUser = async  (payload) => apiRequest('post', '/api/users/register', payload);
export const LoginUser = async (payload) => apiRequest('post', '/api/users/login', payload);
<<<<<<< HEAD
export const GetLoggedInUser = async () => apiRequest('get','/api/users/get-logged-in-user');
=======
export const GetLoggedInUser = async () => apiRequest('get', 'api/users/get-logged-in-user'); 

>>>>>>> 1cae76abfcc3e75326d34b7ae9ce6033905d5935
