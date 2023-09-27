import { usePopUpContext } from "../contexts/PopUpContext"

function PopUp(): JSX.Element {

    const popUpContext = usePopUpContext()

    return (
        <div id="popUpContainer" className={`${(popUpContext.isPopUpVisible) ? "" : "hidePopUpArea"}`}>

            <div id="popUpExitSpace" onClick={popUpContext.hidePopUp}/>

            <div id="popUpDisplayContainer" onClick={(e) => {e.stopPropagation()}}>
                
                <div id="popUpTitleBarContainer">
                    {/* <button id="popUpCloseButton" onClick={popUpContext.hidePopUp}> */}
                        <svg id="closeSVG" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="ffffff" stroke="ffffff" onClick={popUpContext.hidePopUp}> 
                            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                        </svg>
                    {/* </button> */}
                </div>

                <div id="popUpDisplayComponentContainer">
                    {popUpContext.displayContent}
                </div>

            </div>

        </div>
    )
}

export default PopUp