const initialState = {
    employeelist : {}
}

const employeelistreducer = (state = initialState, action) => {
    
    if(action.type === 'ADDEMPLOYEELiST') {
        return {
            ...state,
            employeelist : action.data
        }
    }
    return state;
}

export default employeelistreducer;