import '../assets/footer.css'

function Footer(): JSX.Element {
    return (
        <div className='foot-grid'>
        <div className='designed'>
            <span>Designed &</span>
            <span>Developed By </span>
            <span id='smallerText'>Jubril-Awwal Shomoye</span>
            <span id='smallerText'>2023</span>
        </div>
        <span id='modified'>Last Modified: 27<sup>th</sup> July 2023</span>
        </div>
        
    )
}

export default Footer