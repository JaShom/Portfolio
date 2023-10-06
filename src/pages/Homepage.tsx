// import Navbar from "../components/navbar.component"
import '../assets/styles/HomePage/home.css'
import Footer from "../components/footer"
import '../assets/icons/arrow_downward.png'
import HomeItems from "../components/homeComp/homeItems"


function Home(): JSX.Element {

    return(
        // <div className="home-body">
        <>
        <div className="heading">
                <span id="welcome"><h1 className="home-h1">Hello There! &#x1F44B; Welcome to my Portfolio.</h1></span>
                {/* <Navbar/> */}
            </div>
                
            <div id="scroller">
                <span id="home-text">Are you ready?</span>
                <span id="scroll-text">Scroll Down</span>
                {/* <div id="scroll-pic"> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" id='scroll-pic'>
                        <path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z" fill= "#ffffff"/>
                    </svg>
                {/* </div> */}
            </div>

            {/* <div className="spacer layer1"></div> */}
            
            <div className="section-background-grey"><HomeItems/></div>
            
            
            <footer>
                <div className="footing">
                    <Footer/>
                </div>
            </footer>
        </>
            
        // </div>
    )
}
export default Home