export function Preview({data}){
    return(
        <div className="preview">
            {data.general && (
                <section>
                    <h2>{data.general.name}</h2>
                    <div className="genInfoPreviewDiv">
                        <p>{data.general.email}</p>
                        <p> | {data.general.phone}</p>
                    </div>
                </section>
            )}
            {data.education.length > 0 && (
                <section className="eduPreviewSection">
                    <h3>Education</h3>
                    <div className="line"></div>
                    {data.education.map((edu, index) => (
                        <div className="eduInfoPreviewDiv" key={index}>
                            <h4>{edu.school}</h4>
                            <p>{edu.title}</p>
                            <p><i>{edu.dateStart} - {edu.dateEnd}</i></p>
                        </div>
                    ))}
                </section>
            )}
            {data.experience.length > 0 && (
                <section className="expPreviewSection">
                    <h3>Experience</h3>
                    <div className="line"></div>
                    {data.experience.map((exp, index) => (
                        <div className="expInfoPreviewDiv" key={index}>
                            <h4>{exp.company}</h4>
                            <p>{exp.position}</p>
                            <p><i>{exp.dateStart} - {exp.dateEnd}</i></p>
                            <p>{exp.tasks}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}