// import { useEffect } from "react"
import '../../assets/styles/HomePage/homeItems.css'
// import KUTE from 'kute.js'
import AboutMeSection from "./sectionItems/aboutMeSection";
import SkillsSection from "./sectionItems/skillsSection";
import ProjectSection from "./sectionItems/projectSection";

function HomeItems(): JSX.Element {

    // Observer for elements
    // useEffect(() => {
        
    //     const animateBlob3 = KUTE.fromTo(
    //         '#blob1',
    //         { path: '#blob1' },
    //         { path: '#blob2' },
    //         { repeat: 999, duration:3000, yoyo: true }
    //     )

    //     animateBlob3.start();

    // }, []);

    return (
        <>
            <AboutMeSection/>
                
            {/* <div id="space"/> */}
            <SkillsSection/>
            {/* <div className="spacer layer2 flip"></div> */}
            <div id="space"/>
            <ProjectSection/>
            <div id="space"/>
            {/* <div className="spacer layer2 "></div> */}
            <div className='default thanks-section'>
                <span id='item-title'>I look forward to hearing from you!</span>
                {/* <img src={require('../../assets/videos/jhin.gif')} alt='ThankYou'/> */}
            </div>
            {/* <div id='space'/> */}
            <section className="default home-section bubble header-grey">
                    <span id="item-title">Contacts & Links</span>
                    <ul id="contact-list">
                        <a href="mailto:ja.shomoye@gmail.com">
                            <image id="mail"/>
                        </a>
                        <a href="https://github.com/JaShom" target="_blank" rel="noreferrer">
                            <image id="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jubril-awwal-shomoye-b78009171/" target="_blank" rel="noreferrer">
                            <image id="linkedIn"/>
                        </a>
                        <a href="https://leetcode.com/JaShom/" target="_blank" rel="noreferrer">
                            <image id="leetcode"/>
                        </a>
                    </ul>
            </section>
        </>
    )
}

export default HomeItems