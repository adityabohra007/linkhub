// import config from "config";
import { authHeader } from "../helpers/auth-headers";
import { BehaviorSubject } from "rxjs";
import { API_URL } from "../api/linkHanger";
const config = {
  apiUrl: API_URL,
};

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${config.apiUrl}/dj-rest-auth/login/`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getRole() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/user/role`, requestOptions).then(
    handleResponse
  );
}

// function getAll() {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
//     handleResponse
//   );
// }

// function register(user) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   };

//   return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
//     handleResponse
//   );
// }

// function update(user) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { ...authHeader(), "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   };

//   return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
//     handleResponse
//   );
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   const requestOptions = {
//     method: "DELETE",
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
//     handleResponse
//   );
// }

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function handleInvalidAuthentication(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data);
    if (!response.ok) {
      if (response.status === 400) {
        // auto logout if 401 response returned from api
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const userService = {
  login,
  logout,

  //   register,
  //   getAll,
  //   getById,
  //   update,
  //   delete: _delete,
};
