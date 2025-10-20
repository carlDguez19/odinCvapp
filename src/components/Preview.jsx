export function Preview({data}){
    return(
        <div className="preview">
            {data.general && (
                <section>
                    <h2>{data.general.name}</h2>
                    <p>{data.general.email}</p>
                    <p>{data.general.phone}</p>
                </section>
            )}
            {data.education.length > 0 && (
                <section>
                    <h3>Education</h3>
                    {data.education.map((edu, index) => (
                        <div key={index}>
                            <p>{edu.school}</p>
                            <p>{edu.title}</p>
                            <p>{edu.dateStart} - {edu.dateEnd}</p>
                        </div>
                    ))}
                </section>
            )}
            {data.experience.length > 0 && (
                <section>
                    <h3>Experience</h3>
                    {data.experience.map((exp, index) => (
                        <div key={index}>
                            <p>{exp.company}</p>
                            <p>{exp.position}</p>
                            <p>{exp.dateStart} - {exp.dateEnd}</p>
                            <p>{exp.tasks}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}