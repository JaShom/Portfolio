import { useEffect, useState } from "react"
import '../../assets/styles/PopUp/CardPopUp.css'

interface iProjectInfoProps {
    projectTitle: string,
    projectVideo:string,
    projectDescription: string[],
    projectURL: string
}
function CardPopUpVideo(props: iProjectInfoProps): JSX.Element {
    const [videoUrl, setVideoUrl] = useState<string | null>(null)

    useEffect(() => {

        import(`../../assets/videos/${props.projectVideo}`)

            .then((module) => {
                // set the video URL once the import is successful
                setVideoUrl(module.default)
            })

            .catch((error) => {
                console.error('Error loading video:', error)
            })

    }, [props.projectVideo])

    return (
        <div id="ProjectDetailsVideoContainer">

            <h3 className="projectTitle">
                {props.projectTitle}
            </h3>
            <p className="projectDescription" >Here's a small video explaining the project (more info below).</p>
            <video controls width={1280} height={720}>

                {videoUrl ? (
                    <source src={videoUrl} type='video/mp4'/>
                ) : (
                
                    <p>Your browser does not support the video tag.</p>
                
                )}

            </video>

            {props.projectDescription.map((para, index) => {
                return <p className="projectDescription" key={index}>{para}</p>
            })}
            <p>Project on Github: 
                <a id="gitLink" href={props.projectURL} target="_blank" rel="noreferrer">
                    {props.projectTitle}
                </a>
            </p>

        </div>
    )
}

export default CardPopUpVideo