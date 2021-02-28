const getUser = (init = '', action) =>{
    switch (action.type) {
        case "USER_NAME":
        return action.payload
        default:
        return init;
    }
}

export default getUser
  