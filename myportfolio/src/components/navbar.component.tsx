import '../assets/navbar.css'
import '../assets/icons/home-outline.svg'
function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/#">
                        About
                    </a>
                </li>
                <li>
                    <a href="/projects">
                        Projects
                    </a>
                    </li>
                <li>
                    <a href="/#">
                        Contact
                    </a>
                </li>  
            </ul>
            
            {/* <ul>
                <li>
                    <a href="/contact">
                        <span className="icon icon-contact">
                            <svg/>
                        </span>
                        <span>Contacts</span>
                    </a>
                </li>
                <li>
                    <a href="/projects">
                        <span className="icon icon-projects">
                            <svg/>
                        </span>
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href="/aboutme">
                        <span className="icon icon-aboutme">
                            <svg/>
                        </span>
                        <span>About Me</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className='icon icon-home'></i>
                        <span >Home</span>
                    </a>
                </li>
            </ul> */}
        </div>
    )
}

export default Navbar