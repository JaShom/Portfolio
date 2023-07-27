import { useEffect } from "react"
import '../../assets/homeItems.css'

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
}, []);

    return (
        <>
        <section className="hidden">
            
            <div className="item1">Learn More About Me</div>
        </section>
        <section className="hidden">
            <div className="item2">Projectssss</div>
        </section>
        <section className="hidden">
            <div className="item3">Contact Info</div>
        </section>
        </>
    )
}

export default HomeItems