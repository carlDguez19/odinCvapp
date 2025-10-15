import { Button } from "./Button";
import { useState } from "react";

export function Experience({onSubmit}){//parameters will also include onEdit, onDelete, onAdd
    const [expInfo, setExpInfo] = useState({
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        tasks: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setExpInfo(prev => ({ ...prev, [id]: value }));
    }

    function educationSubmit(e){
        e.preventDefault();
        onSubmit(edInfo);
    }

    return (
        <form className="experience-info" action="POST">
            <h2>Experience</h2>
            <label htmlFor="company">Company: </label>
            <input type="text" id="company" onChange={handleChange}/>
            <label htmlFor="position">Position: </label>
            <input type="text" id="position" onChange={handleChange}/>
            <label htmlFor="dateStart">Starting date: </label>
            <input type="date" id="dateStart" onChange={handleChange}/>
            <label htmlFor="dateEnd">Ending date: </label>
            <input type="date" id="dateEnd" onChange={handleChange}/>
            <label htmlFor="tasks">Main tasks: </label>
            <input type="text" id="tasks" onChange={handleChange}/>
            <Button type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )

}