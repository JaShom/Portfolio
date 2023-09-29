import { useEffect } from "react"

function AboutMeSection(): JSX.Element {
    useEffect (() => {
        // Observer for about me description
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('show', entry.isIntersecting);
                // if (entry.isIntersecting) {
                //     entry.target.classList.add('show');
                // } else {
                //     entry.target.classList.remove('show');
                // }
            });
        });

        const hiddenElement = document.querySelectorAll('.hidden');
        hiddenElement.forEach((el) => observer.observe(el));
        
    }, []);
    return (
        <section className="home-section background-grey">
            <div className="item1">
                <div id="item-title-pic">
                    <span id="item-title">Who Am I?</span>
                    <image id="me"/>
                </div>
                <span id="item1-desc" className="hidden">
                    Hello there! I am Jubril-Awwal Shomoye. People normally use Awwal but whatever feels comfortable to you is alright. 
                    I am a Computer Science Graduate, a gamer and a gym nerd. I'm actively on the lookout for Software Engineer opportunities in any industry (I don't think I can be picky), 
                    which would allow me to kick start my career, permit me to learn new skills whilst enhancing and honing current skills. 
                    Although I'd prefer a backend role, I am not picky with any position at the moment. 
                    I love technology and problem solving
                </span>
            </div> 
        </section>
    )
}

export default AboutMeSection