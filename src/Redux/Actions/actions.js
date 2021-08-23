import actionTypes from "../Constants/actionType";

export const changeToFirstTheme = () => {
    return{
        type: actionTypes.BUTTON_BACKGROUNDBLUE
    }

}
 
export const changeToSecondTheme = () => {
    return{
        type: actionTypes.BUTTON_BACKGROUNDRED
    }
}

export const changeToThirdTheme = () => {
    return{
        type: actionTypes.BUTTON_BACKGROUNDYELLOW
    }
}

export const changeToFourthTheme = () => {
    return{
        type: actionTypes.BUTTON_BACKGROUNDDARKGREEN
    }
}

export const changeToFifthTheme = () => {
    return{
        type: actionTypes.BUTTON_BACKGROUNDGREY
    }
}