// import '../../assets/backgrounds/FinCatPic.png'

import { useEffect, useState } from "react"

// import '../../assets/backgrounds/FinCatPic.png'
interface iProjectInfoProps {
    projectTitle: string,
    projectPicture: string,
    projectDescription: string[],
    projectURL: string
}
function CardPopUp(props: iProjectInfoProps): JSX.Element {
    const picLocation = '../../assets/backgrounds/'
    const imagePath = picLocation + props.projectPicture
    console.log(imagePath)
    const [pictureUrl, setPictureUrl] = useState<string | undefined>(undefined)

    useEffect(() => {
        import(`../../assets/backgrounds/${props.projectPicture}`)

            .then((module) => {
                setPictureUrl(module.default)
            })

            .catch((error) => {
                console.log('Error loading picture: ', error)
            })

    }, [props.projectPicture])

    return (
        <div id="ProjectDetailsContainer">
            <h3 className="projectTitle">
                {props.projectTitle}
            </h3>
            <p className="projectDescription" style={{textAlign:"center"}}>Scroll down</p>
            <img height={920} width={1280} src={pictureUrl} alt={props.projectPicture}/>

            {props.projectDescription.map((para, index) => {
                return <p className="projectDescription" key={index}>{para}</p>
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