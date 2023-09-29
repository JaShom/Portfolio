import { useEffect } from "react"

function SkillsSection(): JSX.Element {
    
    useEffect(() => {

        // Observers for lists
        const listObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('list1-s', entry.isIntersecting);
            });
        });

        const hiddenListElement = document.querySelectorAll('.list1-h');
        hiddenListElement.forEach((l1) => listObserver.observe(l1));

        // List 2
        const listObserver2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('list2-s', entry.isIntersecting);
            });
        });

        const hiddenListElement2 = document.querySelectorAll('.list2-h');
        hiddenListElement2.forEach((l2) => listObserver2.observe(l2));

        // List 3
        const listObserver3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('list3-s', entry.isIntersecting);
            });
        });

        const hiddenListElement3 = document.querySelectorAll('.list3-h');
        hiddenListElement3.forEach((l3) => listObserver3.observe(l3));

    }, []);

    return (
        <section className=" home-section">
                <div className="item2">
                    <span id="item-title">Skills</span>
                    <span id="item2-desc">Here are the Languages / Technologies & Softwares I've learnt and used since I've begun programming</span>
                    <div id="item-desc-area">
                        <span className="list1-h">
                            <p id="listTitle">Languages</p>
                            <ul id="listItems">
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>R</li>
                            </ul>
                        </span>

                        <span className="list2-h">
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
                                <li>TypeScript</li>
                            </ul>
                        </span>

                        <span className="list3-h">
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
            </section>
    )
}
export default SkillsSection