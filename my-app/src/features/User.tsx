import React, { ReactElement } from "react";

interface Props{
    Name : string
}

const User = ({Name} : Props): ReactElement => {
    return <li className="User">{Name}</li>

}

export default User;