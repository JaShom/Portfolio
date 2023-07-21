import Navbar from "../components/navbar.component"
import '../assets/home.css'
import Footer from "../components/footer.component"
import '../assets/arrow_downward.png'


function Home(): JSX.Element {

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
    hiddenElement.forEach((el) => observer.observe(el))

    return(
        <div className="home-body">
        <div className="heading">
            <span id="welcome"><h1>Welcome visitor, I am Jubril-Awwal Shomoye.</h1></span>
            <Navbar/>
        </div>
        {/* <div className="box"> */}
            
        <div id="scroller">
            <span id="scroll-text">Scroll Down</span>
            <div id="scroll-pic"></div>
        </div>
            
        {/* </div> */}
        <section className="hidden">
            <div className="item1">a</div>
        </section>
        <section className="hidden">
            <div className="item2">b</div>
        </section>
        <section className="hidden">
            <div className="item3">c</div>
        </section>
        
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