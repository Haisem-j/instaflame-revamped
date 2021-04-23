import * as utils from "../Utils";

export const getAllPosts = async (token) => {
  try {
    let response = await fetch(`${utils.backendRoute}/posts/getAll`, {
      method: "GET",
      headers: {
        jwt: token,
      },
    });
    let results = await response.json();
    return results.data.posts;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (token, post) => {
  try {
    let response = await fetch(`${utils.backendRoute}/posts/del/${post}`, {
      method: "DELETE",
      headers: {
        jwt: token,
      },
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const uploadPicture = async (token, file, desc, getUser) => {
  try {
    const formData = new FormData();
    formData.append("image", file.files[0]);
    formData.append("description", desc);
    formData.append("username", getUser);

    let response = await fetch(`${utils.backendRoute}/posts/upload`, {
      method: "POST",
      headers: {
        jwt: token,
      },
      body: formData,
    });

    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (token, imageId) => {
  try {
    let response = await fetch(
      `${utils.backendRoute}/posts/like/${imageId}`,
      {
        headers: {
          jwt: token,
        },
      }
    );
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProfilePosts = async (token, pName) => {
  try {
    let response = await fetch(
      `${utils.backendRoute}/posts/profile/${pName}`,
      {
        method: "GET",
        headers: {
          jwt: token,
        },
      }
    );
    let final = await response.json();
    return {
      posts: final.data,
      tempName: pName,
    };
  } catch (err) {
    console.log(err);
  }
};
