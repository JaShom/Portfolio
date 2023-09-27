import { useEffect, useState } from "react"
import '../../assets/styles/PopUp/CardPopUp.css'
// import videoFile from '../../assets/videos/SIAGPU_Eplainer.mp4'
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

            <video controls width={1280} height={720}>

                {videoUrl ? (
                    <source src={videoUrl} type='video/mp4'/>
                ) : (
                
                    <p>Your browser does not support the video tag.</p>
                
                )}

            </video>

            {props.projectDescription.map((para) => {
                return <p className="projectDescription">{para}</p>
            })}
            <p>Project on Github: 
                <a id="gitLink" href={props.projectURL}  target="_blank" rel="noreferrer">
                    {props.projectTitle}
                </a>
            </p>

        </div>
    )
}

export default CardPopUpVideo