import Login from './components/login/login';
import EmployeeList from './components/employeelist/employee-list';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function App(props) {

  var isAuth = useSelector((state) => {
    return state.authentication.isAuthorised;
  });

  useEffect(() => {
    if(isAuth===true) {
      props.history.push("/employeelist");
    }
    if(isAuth===false) {
      props.history.push("/login");
    }
  },[isAuth, props.history])
  return (
    <div className="App">
      <Route path="/login" exact component={Login}/>
      <Route path="/employeelist" exact component={EmployeeList}/>
    </div>
  );
}

export default withRouter(App);
