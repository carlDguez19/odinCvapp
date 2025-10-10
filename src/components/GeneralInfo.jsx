import { use, useState } from "react";
import { Button } from "./Button";

function GeneralInfo(){
    const[genInfo, setGenInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function generalSubmit(){
        
    }
    return (
        <div className="general-info">
            <h2>General Information</h2>
            <input type="text" id="name"/>
            <input type="email" id="email"/>
            <input type="tel" id="phone"/>
            <Button type="submit" text="Submit" onClick={generalSubmit} fontSize="18px"/>
        </div>
    )
}