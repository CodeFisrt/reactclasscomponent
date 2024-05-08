import React, { useState } from 'react';

const User = () => {

    const [name,setName] = useState("");

    const [surName,setSurname] =  useState("")

    const changeNAme = () => {
        setName("Aditya")
    }

    return (
        <div>
            User - {name}
            <button onClick={changeNAme}> changeNAme</button>
        </div>
    );
};

export default User;