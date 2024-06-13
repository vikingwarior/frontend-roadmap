import { createContext } from "react";

const UserContext = createContext({
    userNameValue : "Default User"
});

export default UserContext;