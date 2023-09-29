interface iProjectInfoProps {
    projectTitle: string,
    projectDescription: string[],
    projectURL: string
}
function CardPopUp(props: iProjectInfoProps): JSX.Element {
    return (
        <div id="ProjectDetailsContainer">
            <h3 className="projectTitle">
                {props.projectTitle}
            </h3>
            {props.projectDescription.map((para) => {
                return <p className="projectDescription">{para}</p>
            })}
            <p> Project here on Github: 
                <a id="gitLink" href={props.projectURL} target="_blank" rel="noreferrer">
                    {props.projectTitle}
                </a>
            </p>
        </div>
    )
}

export default CardPopUp