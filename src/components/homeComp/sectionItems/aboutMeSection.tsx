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
                    {/* <image id="me"/> */}
                </div>
                <span className="hidden">
                    <p id="item1-desc">
                        Hello there! I am Jubril-Awwal Shomoye, known to many as Awwal, and I am a Computer Science Graduate with a passion for technology. I am a gamer and a fitness enthusiast. 
                        Currently, I am actively seeking opportunities as a Software Engineer across various industries. I am open to exploring roles that can kick start my career, provide opportunities to acquire new skills, and further refine my existing ones.
                        
                    </p>
                    <p id="item1-desc">
                        While I have a preference for backend development, I am flexible and open to considering positions in any area of technology. My deep love for technology and my problem-solving mindset drive my enthusiasm for this field. 
                        I am eager to contribute my skills and knowledge to tackle challenging problems and help create innovative solutions.
                        
                    </p>
                    <p id="item1-desc">
                        Thank you for visiting my web portfolio, and please feel free to explore my work and accomplishments in the field of Computer Science. If you have any inquiries or would like to connect, I would be delighted to hear from you (Email and Social Media below).
                    </p>
                </span>
                
            </div> 
        </section>
    )
}

export default AboutMeSection