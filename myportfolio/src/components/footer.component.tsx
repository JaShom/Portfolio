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
        <span id='disclaimer'>Disclaimer: I DO NOT OWN THE ICONS USED HERE NOR DO I CLAIM OWNERSHIP OF THEM</span>
        <span id='modified'>Last Modified: 6<sup>th</sup> August 2023</span>
        </div>
        
    )
}

export default Footer