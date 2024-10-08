// import { useEffect } from "react";

import Card from "../../Card"
import PopUp from "../../PopUp"

// import KUTE from 'kute.js'
function ProjectSection(): JSX.Element {

    // Observer for elements
    // useEffect(() => {
        // BLOB ANIMATION ON HIATUS RN
        // const animateBlob3 = KUTE.fromTo(
        //     '#blob1',
        //     { path: '#blob1' },
        //     { path: '#blob2' },
        //     { repeat: 999, duration:3000, yoyo: true }
        // )

        // animateBlob3.start();

    // }, []);

    const projects = [
        {
            projectID: 0,
            title: "Uni Final Year Project",
            description: "This project showcases the development and optimization of a Swarm Intelligence Algorithm, DFO, by harnessing the power of CPU Multi-Processing and GPU computing..."
        },
        {
            projectID: 1,
            title: "GPT Finance Analyzer",
            description: "\"FinCat\" is a web application that combines an appealing user interface with secure bank data access and advanced transaction processing powered by GPT through the OpenAI API..."
        },
        {
            projectID: 2,
            title: "Multi-Client Chat",
            description: "This project demonstrates the development of a multi-client chat server program in Java. Employing various techniques and principles to create an efficient..."
        },
        {
            projectID: 3,
            title: "Navigation System",
            description: "The \"London Underground Navigation System\" is an application that uses data structures and algorithms to help users plan travel routes within the London Underground..."
        },
        {
            projectID: 4,
            title: "Colour Capture Tool",
            description: "Developed a real-time screen capture tool using C++ that tracks the cursor's position and captures pixel color information. The application continuously displays the cursor's coordinates and..."
        },
    ]

    return (
        <section className="hidden home-section ">
                {/* <a id="a-links" href="/projects">Projects</a> */}
                {/* <svg className="blob-motion"
                    id="visual" 
                    viewBox="0 0 960 500" 
                    width="960" height="500" 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1"
                >
                    <g transform="translate(489.3505193480663 160.4658443830171)">
                        <path id="blob1"
                            d="M122.5 -120.1C151.1 -93.8 161.6 -46.9 151.3 -10.3C141.1 26.4 110.1 52.8 81.5 80.1C52.8 107.5 26.4 135.7 -0.1 135.8C-26.5 135.9 -53 107.7 -85.2 80.4C-117.4 53 -155.2 26.5 -168.4 -13.3C-181.7 -53 -170.4 -106.1 -138.2 -132.4C-106.1 -158.7 -53 -158.4 -3.1 -155.3C46.9 -152.2 93.8 -146.5 122.5 -120.1" 
                            fill="#778899"
                        ></path>
                    </g>
                    <g transform="translate(515.007918847961 156.15061769825763)" style={{visibility:'hidden'}}>
                        <path id='blob2'
                            d="M93.7 -103.1C112.5 -75 112.5 -37.5 110.4 -2.1C108.2 33.2 104 66.5 85.2 85.6C66.5 104.8 33.2 109.9 -9.9 119.8C-53 129.7 -106.1 144.4 -140.1 125.2C-174.1 106.1 -189 53 -177.5 11.5C-165.9 -29.9 -127.9 -59.9 -93.9 -88C-59.9 -116.2 -29.9 -142.6 3.8 -146.4C37.5 -150.1 75 -131.3 93.7 -103.1" 
                            fill="#778899"
                        ></path>
                    </g>
                </svg> */}
            <div className="item3">
                <PopUp/>
                <div className="projectContainer">

                    <span id="item-title">Projects</span>
                    <p id="messageToHover">Hover/Click cards</p>

                    <div className="projectCardContainer">

                        {projects.map((item) => {
                            return <Card key={item.projectID} projectID={item.projectID} title={item.title} description={item.description} />
                        })}

                    </div>
                
                </div>

            </div>
        </section>
    )
}

export default ProjectSection

