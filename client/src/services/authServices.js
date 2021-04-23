import * as utils from "../Utils";

export const authLogin = async (user) => {
  try {
    let response = await fetch(`${utils.backendRoute}/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    return result;
  } catch (error) {
    let result = {
      success: false,
      msg: "Something went wrong....",
    };
    return result;
  }
};

export const authRegister = async (user) => {
  try {
    let response = await fetch(`${utils.backendRoute}/auth/registerUser`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    return result;
  } catch (err) {
    let result = {
      success: false,
      msg: "Something went wrong....",
    };
    return result;
  }
};
