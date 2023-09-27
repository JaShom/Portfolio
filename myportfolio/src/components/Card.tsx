import '../assets/styles/HomePage/homeItems.css'
import { usePopUpContext } from '../contexts/PopUpContext'
import CardPopUp from './CardPopUps/CardPopUp'
import CardPopUpVideo from './CardPopUps/CardPopUpVideo'
interface iCardDetailsProps {
    projectID: number,
    title: string,
    description: string
}

function Card(props: iCardDetailsProps): JSX.Element {

    const popUpContext = usePopUpContext()
    
    const cardInfoForPopUp = [
        {
            projectID: 0,
            projectTitle: 'GPU and Multi-Processing Implementation of a Swarm Intelligence Algorithm',
            projectVideo: 'SIAGPU_Eplainer.mp4',
            projectDescription: [
                "In this project, I worked on enhancing a Swarm Intelligence Alogrithm(SIA) known as Dispersive Fly Optimization(DFO), using both the CPU and GPU of a computer. SIAs are agents/bots in an environment, which constantly communicate with each other in an attempt to find a solution. These algorithms generally mimic behaviours from animals and insects in nature, such as Ant Colony Optimisation, Bee Swarm Optimisation, Cuckoo Search and Particle Swarm Optimisation.",
                "DFO is an algorithm used to solve complex problems. Its an algorithm inspired by the swarming of flies, hovering over a food source. To my knowledge, there hasn't been an attempt to modify DFO to leverage CPU Multi-Processing and GPU programming.",
                "Through extensive research, I tested this improved DFO on various types of problems and observed that it could find the best solution much more quickly, especially when dealing with a benchmark function called Rosenbrock with a staggering 28x increase in processing speed.To achieve this all this, I utilized specialized computer programs and libraries like Numba, numpy, multi-processing, and pyCuda.",
                "The programming languages I used for this project included Python, C++, and CUDA. Overall, this project allowed me to optimize a SIA by harnessing the power of both the CPU and GPU, resulting in more efficient problem-solving across different scenario"
            ],
            projectURL: 'https://github.com/JaShom/GPU-and-Multi-Processing-Implementation-of-a-Swarm-Intelligence-Algorithm'
        },
        {
            projectID: 1,
            projectTitle: "”FinCat” GPT-Powered Finance Analyzer",
            projectVideo: '',
            projectDescription: [],
            projectURL: 'https://github.com/ProjectFinCat/FinCat'
        },
        {
            projectID: 2,
            projectTitle: 'Multi-Client Chat Server Program',
            projectVideo: '',
            projectDescription: [],
            projectURL: 'https://github.com/JaShom/Chat-Server/tree/main/APChatServer-main'
        },
        {
            projectID: 3,
            projectTitle: 'London Underground Navigation System',
            projectVideo: '',
            projectDescription: [],
            projectURL: 'https://github.com/JaShom/London-Underground-Navigation-System'
        },
        {
            projectID: 4,
            projectTitle: '',
            projectVideo: '',
            projectDescription: [],
            projectURL: ''
        },
    ]
    const cardInfoNeeded = cardInfoForPopUp[props.projectID]
    
    const cardClicked = (projectVideo:string) => {
        console.log(props.title)
        if(projectVideo.length > 0) {
            popUpContext.setDisplayComponent?.(
                <CardPopUpVideo projectTitle={cardInfoNeeded.projectTitle} projectVideo={projectVideo} projectDescription={cardInfoNeeded.projectDescription} projectURL={cardInfoNeeded.projectURL}/>
            )
        }
        else {
            popUpContext.setDisplayComponent?.(
                <CardPopUp projectTitle={cardInfoNeeded.projectTitle} projectDescription={cardInfoNeeded.projectDescription} projectURL={cardInfoNeeded.projectURL}/>
            )
        }
        popUpContext.showPopUp?.()
    }
    return (
        <div className="card" onClick={() => cardClicked(cardInfoNeeded.projectVideo)}>
            <h3 className="title">{props.title}</h3>

            <div className="bar">
                <div className="emptyBar"></div>
                <div className="filledBar"></div>
            </div>

            {/* <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                </div> */}

            <p className="cardDescription">
                {props.description}
            </p>

            <p className="clickMore">Click Card For More Info</p>

        </div>
    )
}

export default Card