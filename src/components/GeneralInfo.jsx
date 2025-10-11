import { use, useState } from "react";
import { Button } from "./Button";

function GeneralInfo({onSubmit}){
    const[genInfo, setGenInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setGenInfo(prev => ({ ...prev, [id]: value }));
    }

    function generalSubmit(){
        e.preventDefault();
        onSubmit(genInfo);
    }

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <input type="text" id="name" value={genInfo.name} onChange={handleChange}/>
            <input type="email" id="email" value={genInfo.email} onChange={handleChange}/>
            <input type="tel" id="phone" value={genInfo.phone} onChange={handleChange}/>
            <Button type="submit" text="Submit" onClick={generalSubmit} fontSize="18px"/>
        </div>
    )
}