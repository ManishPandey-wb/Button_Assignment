import actionTypes from '../Constants/actionType';
import initialState from '../Data';

export const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUTTON_BACKGROUNDBLUE:
            return {primary: '#E1EFE1', secondary:'#000000'}
        
        case actionTypes.BUTTON_BACKGROUNDRED:
            return {primary: '#852121', secondary: '#000000'}

        case actionTypes.BUTTON_BACKGROUNDYELLOW:
            return {primary: '#C06801', secondary: '#FFFFFF'}
        
        case actionTypes.BUTTON_BACKGROUNDDARKGREEN:
            return {primary: '#0E4316', secondary: '#F3F2FC'}

        case actionTypes.BUTTON_BACKGROUNDGREY:
            return {primary: '#808080', secondary: '#E1EFE1'}
    
        default:
            return state;
    }
}