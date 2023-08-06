import { useEffect } from "react"
import '../../assets/homeItems.css'
// import KUTE from 'kute.js'
import AboutMeSection from "./sectionItems/aboutMeSection.component";
import SkillsSection from "./sectionItems/skillsSection.component";
import ProjectSection from "./sectionItems/projectSection.component";

function HomeItems(): JSX.Element {

    // Observer for elements
    useEffect(() => {
        
        // const animateBlob3 = KUTE.fromTo(
        //     '#blob1',
        //     { path: '#blob1' },
        //     { path: '#blob2' },
        //     { repeat: 999, duration:3000, yoyo: true }
        // )

        // animateBlob3.start();

    }, []);

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
            <section className="default home-section bubble header-grey">
                    <span id="item-title">Contacts & Links</span>
                    <ul id="contact-list">
                        <a href="mailto:ja.shomoye@gmail.com?subject=Job%20Offer%3F%3F&body=Please%20consider%20Me%F0%9F%99%8F">
                            <image id="mail"/>
                        </a>
                        <a href="https://github.com/JaShom">
                            <image id="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jubril-awwal-shomoye-b78009171/">
                            <image id="linkedIn"/>
                        </a>
                        <a href="https://leetcode.com/JaShom/">
                            <image id="leetcode"/>
                        </a>
                    </ul>
            </section>
        </>
    )
}

export default HomeItems