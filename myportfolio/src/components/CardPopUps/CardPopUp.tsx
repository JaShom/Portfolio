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
            <p> Project here on Github: 
                <a id="gitLink" href="https://github.com/ProjectFinCat/FinCat">
                    {props.projectTitle}
                </a>
            </p>
        </div>
    )
}

export default CardPopUp