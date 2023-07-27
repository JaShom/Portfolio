import Navbar from "../components/navbar.component"
import '../assets/home.css'
import Footer from "../components/footer.component"
import '../assets/arrow_downward.png'
import HomeItems from "../components/homeComp/homeItems.component"


function Home(): JSX.Element {

    return(
        <div className="home-body">
            <div className="heading">
                <span id="welcome"><h1>Welcome visitor, I am Jubril-Awwal Shomoye.</h1></span>
                <Navbar/>
            </div>
            {/* <div className="box"> */}
                
            <div id="scroller">
                <span id="home-text">This is the Homepage!</span>
                <span id="scroll-text">Scroll Down</span>
                <div id="scroll-pic"></div>
            </div>
                
            {/* </div> */}
            <HomeItems/>
            
            {/* <section>
                <h1>Hi Mom</h1>
                <p>This is my website</p>
            </section> */}

            {/* <section>
                <h2>Welcome to my site</h2>
            </section>

            <section>
                <h2>A new Section</h2>
            </section> */}
            
            <footer>
                <div className="footing">
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}
export default Home