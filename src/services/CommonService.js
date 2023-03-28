/**
 * Created on feb 6th 2023 by Bash
 */

import { ref } from "vue";
import Vue from 'vue';
/**
 * setting the object data to storage
 * @param {*} object
 * @returns
 * @author Bash
 */
export const setStorage = object => {
  localStorage.setItem("userData", JSON.stringify(object));
  return object;
};

/**
 * for getting the storage data
 * @returns
 * @author Bash
 */
export const getStorage = () => {
  let data = ref(null);
  data = localStorage.getItem("userData");
  return JSON.parse(data);
};

/**
 * remove the data from  local storage
 * @author Bash
 */
export const removeStorage = () => {
  localStorage.removeItem("userData");
};

/**
 * for submitting data to the back end
 * @param {*} url
 * @param {*} method
 * @param {*} postData
 * @returns
 * @author Bash
 */
export const postToServer = (url, method, postData) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * for submitting data to the back end
 * @param {*} url
 * @param {*} method
 * @param {*} postData
 * @returns
 * @author Bash
 */
export const postToServerWithToken = (url, method, postData) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getStorage().token
    },
    body: JSON.stringify(postData)
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * getting data from the server
 * @param {*} url
 * @param {*} method
 * @returns
 * @author Bash
 */
export const getFromServer = (url, method) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * getting data from the server
 * @param {*} url
 * @param {*} method
 * @returns
 * @author Bash
 */
export const getFromServerWithToken = (url, method) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getStorage().token
    }
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * Generic request to the server
 * @param {*} url
 * @param {*} method
 * @param {*} isAuthenticated
 * @param {*} postData
 * @returns
 * @author Bash
 */
export const genericRequest = (url, method, isAuthenticated, postData) => {
  if (method == "GET" || method == "get") {
    if (isAuthenticated) {
      return getFromServerWithToken(url, method).then(response => {
        return response;
      });
    } else {
      return getFromServer(url, method).then(response => {
        return response;
      });
    }
  } else {
    if (isAuthenticated) {
      return postToServerWithToken(url, method, postData).then(response => {
        return response;
      });
    } else {
      return postToServer(url, method, postData).then(response => {
        return response;
      });
    }
  }
};

/**
 * covert image to base64 string
 * @param {*} files
 * @returns
 * @author Bash
 */
export const base64StringImage = files => {
  let data = ref(null);
  let reader = new FileReader();
  reader.onload = img => {
    console.log(img);
    data = reader.result;
  };
  reader.readAsDataURL(files[0]);
  return data;
};

export const ValidationMessage = () => {
  let messages = {
    serviceName: [{ required: true, message: "Service name is required" }]
  };
  return messages;
};


/**
 * Updating array or pushing new element to the array
 * @param {*} array
 * @param {*} param
 * @param {*} value
 * @param {*} newObject
 * @returns
 */
export const updateOrPushObjectByParam=(array, param, value, key, newObject)=> {
    const index = array.findIndex(obj => obj[param] === value);
    let response=[];
    if (index !== -1) {

     response= [
        ...array.slice(0, index),
        {...array[index], [key]: newObject[key]},
        ...array.slice(index + 1)
      ];

      return response.map(item =>JSON.parse(JSON.stringify(item)));
    }

    response= [...array, newObject];
    return response.map(item => JSON.parse(JSON.stringify(item)));
  }
