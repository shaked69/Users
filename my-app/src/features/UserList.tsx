import React, { ReactElement } from "react";
import User from "./User";

interface Props{
    users : string[];
}

const UserList = ({users} : Props):ReactElement => {
    return <ul>
            {users.map((user) => <User Name={user}></User>)}

    </ul>
}

export default UserList


