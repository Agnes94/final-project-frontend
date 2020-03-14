export const checkAuth = accessToken => {
  fetch("http://localhost:8000/secrets", {
    method: "GET",
    headers: { Authorization: accessToken }
  }).then(res => {
    if (!res.ok) {
      console.log("forbidden");
    }
    return res.json();
  });
};

//*** Sign Up ***//

export const signUp = (name, email, password) => {
  return fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then(res => res.json())
    .then(res => {
      if (!res.accessToken) {
        return {
          success: false,
          message: res.message
        };
      }
      return {
        success: true
      };
    });
};

//*** Login ***//

export const loginUser = (email, password) => {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      if (!res.accessToken) {
        return {
          success: false,
          message: res.message
        };
      }
      window.localStorage.setItem("accessToken", res.accessToken);
      console.log(res.name);
      return {
        success: true,
        name: res.name
      };
    })
    .catch(err => {
      console.log(err);
    });
};

//*** Plant form ***//

export const plantForm = (name, location, acquiredAt, type, notes, waterAt) => {
  return fetch("http://127.0.0.1:8000/plants", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${name}&location=${location}&type=${type}&notes=${notes}&acquiredAt=${acquiredAt}&waterAt=${waterAt}`
  })
    .then(res => res.json())
    .then(res => {
      return {
        success: true
      };
    });
};

/*
export const plantForm = (name, location, acquiredAt, type, notes, waterAt) => {
  return fetch("http://localhost:8000/plants", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: `name = ${name} & location=${location} & type=${type} & notes=${notes}`
  })
    .then(res => res.json())
    .then(res => {
      if (!res.accessToken) {
        return {
          success: false,
          message: res.message
        };
      }
      return {
        success: true
      };
    });
}; */