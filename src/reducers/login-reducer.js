const initialState = {
    isAuthorised : false
}

const loginreducer = (state = initialState, action) => {
    
    if(action.type === 'AUTHORISED') {
        return {
            isAuthorised : true
        }
    }
    return state;
}

export default loginreducer;