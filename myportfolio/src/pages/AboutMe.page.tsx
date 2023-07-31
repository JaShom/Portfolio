import Navbar from "../components/navbar.component"
import '../assets/aboutme.css'
import Footer from "../components/footer.component"

function AboutMe(): JSX.Element {
    return (
        <div className="about-body">
        <div className="about-heading">
            <span id="about-welcome"><h1 className="about-h1">Who Am I?</h1></span>
            <Navbar/>
        </div>
        <section>Hello there! I am Jubril-Awwal Shomoye. People normally just call me Awwal but whatever feels comfortable to you.
        I am a Computer Science Graduate, a gamer and a gym nerd. I actively on the lookout for Software Engineer opportunities in any industry, 
        which would allow me to kick start my career, permit me to learn new skills, enhance and hone current skills.
        Although I'd prefer a backend role, I am not picky with any position at the moment.
        I love technology and problem solving</section>
        <footer>
            <div className="footing">
                <Footer/>
            </div>
        </footer>
        </div>
    )
}
export default AboutMe