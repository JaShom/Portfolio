import { FC, ReactNode, createContext, useContext, useState } from "react"

interface iPopUpContext {
    isPopUpVisible: boolean
    displayContent: JSX.Element | null

    showPopUp?: () => void
    hidePopUp?: () => void
    setDisplayComponent?: (component: JSX.Element | null) => void
}

type ProviderProps = {
    children: ReactNode
}

const popUpContext = createContext<iPopUpContext | undefined>(undefined)

export function usePopUpContext(): iPopUpContext {

    const checkContext = useContext(popUpContext)

    if(!checkContext) {
        throw new Error("Pop up context is not being called inside the context provider")
    }

    return checkContext

}

export const PopUpProvider: FC<ProviderProps> = ({children}) => {

    // defining pop up visible variable
    const [isPopUpVisibleState, setIsPopUpVisibleState] = useState<boolean>(false)
    const [isDisplayComponentState, setIsDisplayComponentState] = useState<JSX.Element | null>(null)
    
    const showPopUp = (): void => {
        setIsPopUpVisibleState(true)
    }

    const hidePopUp = (): void => {
        setIsDisplayComponentState(null)
        setIsPopUpVisibleState(false)
    }

    // const setDisplayComponent = (component: JSX.Element | null): void => {
    //     setDisplayComponent(component)
    // }

    const contextVal: iPopUpContext = {
        isPopUpVisible: isPopUpVisibleState,
        displayContent: isDisplayComponentState,

        showPopUp: showPopUp,
        hidePopUp: hidePopUp,
        setDisplayComponent: setIsDisplayComponentState
    }

    console.log(isPopUpVisibleState)

    return (
        <popUpContext.Provider value={contextVal}>
            {children}
        </popUpContext.Provider>
    )

}