// import Navbar from "../components/navbar.component"
import '../assets/home.css'
import Footer from "../components/footer.component"
import '../assets/icons/arrow_downward.png'
import HomeItems from "../components/homeComp/homeItems.component"


function Home(): JSX.Element {

    return(
        // <div className="home-body">
        <>
        <div className="heading">
                <span id="welcome"><h1 className="home-h1">Hello There! 👋&#x1F3FF; Welcome to my Portfolio.</h1></span>
                {/* <Navbar/> */}
            </div>
                
            <div id="scroller">
                <span id="home-text">Are you ready?</span>
                <span id="scroll-text">Scroll Down</span>
                <div id="scroll-pic"/>
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