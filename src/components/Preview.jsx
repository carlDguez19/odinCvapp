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
            {data.education && (
                <section>
                    <h3>Education</h3>
                    <p>{data.education.school}</p>
                    <p>{data.education.title}</p>
                    <p>{data.education.dateStart} - {data.education.dateEnd}</p>
                </section>
            )}
            {data.experience && (
                <section>
                    <h3>Experience</h3>
                    <p>{data.experience.company}</p>
                    <p>{data.experience.position}</p>
                    <p>{data.experience.dateStart} - {data.experience.dateEnd}</p>
                    <p>{data.experience.tasks}</p>
                </section>
            )}
        </div>
    )
}