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
            projectPicture: '',
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
            projectPicture: 'FinCatPic.png',
            projectDescription: [
                "\"FinCat\" represents a collaborative team project where my role was centered on configuring data for the OpenAI text-davinci-003 model, ensuring seamless categorization and preparation for user presentation.",
                "This web application combines an aesthetically pleasing React-based user interface with secure bank data access through Plaid integration. It efficiently processes user transactions using the OpenAI API for precise categorization and seamlessly presents the categorized data on the frontend.",
                "Leveraging a stack of technologies including JavaScript, React, Express.js, Node.js, the OpenAI API, and Plaid, \"FinCat\" offers users an appealing, secure, and user-friendly platform for accessing and comprehending their financial information.",
                "Unfortunately, this project has been temporarily halted, with the hope of resuming and completing it in the future."
            ],
            projectURL: 'https://github.com/ProjectFinCat/FinCat'
        },
        {
            projectID: 2,
            projectTitle: 'Multi-Client Chat Server Program',
            projectVideo: '',
            projectPicture: 'ChatServer.png',
            projectDescription: [
                "The \"Multi-Client Chat Server Program\" represents my debut venture into Java programming and collaborative teamwork, making it a particularly memorable project.",
                "It involves the creation of a Java-based chat server application, emphasizing key features such as multi-client support, facilitated through socket programming and multithreading for concurrent communication.",
                "Additionally, the project employs a UML class diagram for architectural visualization and adheres to GRASP principles for well-structured class organization.",
                "Overall, this project not only showcases the development of an efficient multi-client chat server but also marks my inaugural experience with Java programming and enjoyable teamwork."
            ],
            projectURL: 'https://github.com/JaShom/Chat-Server/tree/main/APChatServer-main'
        },
        {
            projectID: 3,
            projectTitle: 'London Underground Navigation System',
            projectVideo: '',
            projectPicture: 'NavSystem.png',
            projectDescription: [
                "The \"London Underground Navigation System\" served as a university coursework task, and it marked my introduction to Advanced Algorithms and Data Structures. This project was particularly noteworthy because it required the implementation of a Doubly Linked List, a specified requirement for the assignment.",
                "Initially, the route calculation algorithm had a runtime complexity of O(n^2). However, I later undertook optimization efforts, incorporating a HashMap data structure to significantly enhance efficiency. This optimization resulted in a notable improvement, reducing the runtime complexity to O(n * log(n)).",
                "In summary, the \"London Underground Navigation System\" project combined my academic exploration of Python with a practical challenge, showcasing my ability to meet specific requirements while implementing algorithmic improvements to achieve more efficient route planning within the London Underground network."
            ],
            projectURL: 'https://github.com/JaShom/London-Underground-Navigation-System'
        },
        {
            projectID: 4,
            projectTitle: 'Real-Time Cursor Position and Colour Capture Tool',
            projectVideo: '',
            projectPicture: 'ColourCapture.png',
            projectDescription: [
                "In this project, I developed a real-time screen capture tool using C++, creating an application that continuously tracks the cursor's position and captures pixel colour information. The tool converts the pixel colour into both RGB and hexadecimal formats and offers real-time updates for cursor position and colour data.",
                "It demonstrates proficiency in screen interaction and colour manipulation within a Windows environment.",
                "However, it's worth noting that the application currently has a limitation, as it may encounter difficulties reading pixels on certain monitors.",
                "Despite this challenge, the project still demonstrates proficiency in C++ programming for Windows, real-time cursor tracking, pixel color capture, conversion, and the development of a user interface for displaying cursor information. This collective expertise makes it a valuable foundation for cursor tracking and pixel color analysis in various applications."
            ],
            projectURL: ''
        },
    ]
    const cardInfoNeeded = cardInfoForPopUp[props.projectID]
    
    const cardClicked = (projectVideo:string) => {

        if(projectVideo.length > 0) {
            popUpContext.setDisplayComponent?.(
                <CardPopUpVideo projectTitle={cardInfoNeeded.projectTitle} projectVideo={projectVideo} projectDescription={cardInfoNeeded.projectDescription} projectURL={cardInfoNeeded.projectURL}/>
            )
        }

        else {
            popUpContext.setDisplayComponent?.(
                <CardPopUp projectTitle={cardInfoNeeded.projectTitle} projectPicture={cardInfoNeeded.projectPicture} projectDescription={cardInfoNeeded.projectDescription} projectURL={cardInfoNeeded.projectURL}/>
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