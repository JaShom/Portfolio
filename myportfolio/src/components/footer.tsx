import '../assets/styles/footer.css'

function Footer(): JSX.Element {

    // Setting up "Last Updated" automatically with Date() function
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let monthName = month[d.getUTCMonth()];
    let day = d.getUTCDate();
    let superS = "th";
    if ( day === 1 || day === 21 || day === 31 ) {
        superS = "st"
    }
    else if ( day === 2 || day === 22 ) {
        superS = "nd"
    }
    else if ( day === 3 || day === 23 ) {
        superS = "rd"
    }

    return (
        <div className='foot-grid'>
        <div className='designed'>
            <span>Designed &</span>
            <span>Developed By </span>
            <span id='smallerText'>Jubril-Awwal Shomoye</span>
            <span id='smallerText'>2023</span>
        </div>
        <span id='disclaimer'>Disclaimer: I DO NOT OWN THE ICONS USED HERE NOR DO I CLAIM OWNERSHIP OF THEM</span>
        <span id='modified'>Last Modified: {day}<sup>{superS}</sup> {monthName} 2023</span>
        </div>
        
    )
}

export default Footer