import { Button } from "./Button.jsx";
import { useState } from "react";

export function Education({onSubmit}){//parameters will also include onEdit, onDelete, onAdd
    const[edInfo, setEdInfo] = useState({
        school: "",
        title: "",
        dateStart: "",
        dateEnd: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setEdInfo(prev => ({ ...prev, [id]: value }));
    }

    function educationSubmit(e){
        e.preventDefault();
        onSubmit(edInfo);
    }

    return (
        <form className = "education-info">
            <h2>Education</h2>
            <label htmlFor="school">School: </label>
            <input type="text" id="school" onChange={handleChange} />
            <label htmlFor="title">Title of Study: </label>
            <input type="text" id="title" onChange={handleChange} />
            <label htmlFor="dateStart">Starting date: </label>
            <input type="date" id="dateStart" onChange={handleChange}/>
            <label htmlFor="dateEnd">Graduation date: </label>
            <input type="date" id="dateEnd" onChange={handleChange}/>
            <Button type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )
}