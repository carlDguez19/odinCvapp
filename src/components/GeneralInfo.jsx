import { useState } from "react";
import { Button } from "./Button.jsx";

export function GeneralInfo({onSubmit}){
    //Local state for the general information section.
    //Each field is controlled, ensuring the form always reflects state
    const[genInfo, setGenInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    //input handler for all fields
    //uses input's id to update the matching key in state
    const handleChange = (e) => {
        const {id, value} = e.target;
        setGenInfo(prev => ({ ...prev, [id]: value }));
    }

    //Submit handler: prevents page reload and sends the entire
    //general info object upward to the parent component(onSubmit)
    function generalSubmit(e){
        e.preventDefault();
        onSubmit(genInfo);
    }

    return (
        //Wrapper for the general info form section
        <form className="general-info">
            <h2>General Information</h2>

            {/* input block for name, email, and phone */}
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

            {/* reusable button component for submitting this section */}
            <Button className="genInfoSub" type="submit" text="Submit" onClick={generalSubmit} fontSize="18px"/>
        </form>
    )
}