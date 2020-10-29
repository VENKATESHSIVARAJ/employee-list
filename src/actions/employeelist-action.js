import {employeelist} from '../data/employeelist'

function employeelistAction(dispatch) {
    dispatch({ type: 'ADDEMPLOYEELiST', data : employeelist });
}

export default employeelistAction;