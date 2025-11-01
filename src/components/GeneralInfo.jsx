import { useState } from "react";
import { Button } from "./Button.jsx";

export function GeneralInfo({onSubmit}){
    const[genInfo, setGenInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setGenInfo(prev => ({ ...prev, [id]: value }));
    }

    function generalSubmit(e){
        e.preventDefault();
        onSubmit(genInfo);
    }

    return (
        <form className="general-info">
            <h2>General Information</h2>
            <div className="general-block">
                <div className="labelInputDiv">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={genInfo.name} onChange={handleChange}/>
                </div>
                <div className="labelInputDiv">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={genInfo.email} onChange={handleChange}/>
                </div>
                <div className="labelInputDiv">
                    <label htmlFor="phone">Phone #: </label>
                    <input type="tel" id="phone" value={genInfo.phone} onChange={handleChange}/>
                </div>
            </div>
            <Button className="genInfoSub" type="submit" text="Submit" onClick={generalSubmit} fontSize="18px"/>
        </form>
    )
}