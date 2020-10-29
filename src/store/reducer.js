const initialState = {
    isAuthorised : false
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'authorised') {
        return {
            isAuthorised : true
        }
    }
    return state;
}

export default reducer;