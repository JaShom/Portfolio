import { useEffect } from "react"
import '../../assets/homeItems.css'
import KUTE from 'kute.js'

function HomeItems(): JSX.Element {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                // entry.target.classList.toggle('show', entry.isIntersecting);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElement = document.querySelectorAll('.hidden');
        hiddenElement.forEach((el) => observer.observe(el));

        const animateBlob3 = KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration:3000, yoyo: true }
        )

        animateBlob3.start();

    }, []);

    return (
        <>
            <section className="home-section background-grey">
                <div className="item1">
                    <span id="item-title">Who Am I?</span>
                        <span id="item1-desc" className="hidden">
                            Hello there! I am Jubril-Awwal Shomoye. People normally use Awwal but whatever feels comfortable to you is alright. 
                            I am a Computer Science Graduate, a gamer and a gym nerd. I'm actively on the lookout for Software Engineer opportunities in any industry (I don't think I can be picky), 
                            which would allow me to kick start my career, permit me to learn new skills whilst enhancing and honing current skills. 
                            Although I'd prefer a backend role, I am not picky with any position at the moment. 
                            I love technology and problem solving
                        </span>
                    
        
                </div>
                {/* <h1 id="a-links"></h1>
                <p id="p-words"></p> */}
                
            </section>
            {/* <div id="space"/> */}
            <section className=" home-section">
                <div className="item2">
                    <span id="item-title">Skills</span>          
                    <span id="item2-desc">Here are the Languages / Technologies & Softwares I've used over since I've begun programming</span>
                    <div id="item-desc-area">
                        <span id="list1">
                            <p id="listTitle">Languages</p>
                            <ul id="listItems">
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>R</li>
                            </ul>
                        </span>

                        <span id="list2">
                        <p id="listTitle">Technologies</p>
                            <ul id="listItems">
                                <li>Numpy</li>
                                <li>Pandas</li>
                                <li>React</li>
                                <li>TensorFlow</li>
                                <li>scikit-learn</li>
                                <li> Django</li>
                                <li>NodeJS</li>
                                <li>CUDA</li>
                            </ul>
                        </span>

                        <span id="list3">
                        <p id="listTitle">Software</p>
                            <ul id="listItems">
                                <li>Github</li>
                                <li>Miro</li>
                                <li>Microsoft Access</li>
                                <li>AxureRP</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <a id="a-links"></a>
            </section>
            {/* <div className="spacer layer2 flip"></div> */}
            <div id="space"/>
            <section className="hidden home-section ">
                
                <a id="a-links" href="/projects">Projects</a>
                <svg className="blob-motion"
                    id="visual" 
                    viewBox="0 0 960 300" 
                    width="960" height="300" 
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
                </svg>
                <p id="p-words">Want to see what I've made? 🤔</p>
                <div id="item-desc-area">yhy yh</div>
            </section>
            <div id="space"/>
            {/* <div className="spacer layer2 "></div> */}
            <section className="default home-section bubble header-grey">
                    <a id="a-links" href="/contact">Contacts & Links</a>
                    <ul id="contact-list">
                        <a id="mail" href="mailto:ja.shomoye@gmail.com?subject=Job Offer??&body=Please consider Me🙏🏿🥺"/>
                        <a id="github" href="https://github.com/JaShom"/>
                        <a id="linkedIn" href="https://www.linkedin.com/in/jubril-awwal-shomoye-b78009171/"/>
                        <a id="leetcode" href="https://leetcode.com/JaShom/" />
                    </ul>
            </section>
        </>
    )
}

export default HomeItems