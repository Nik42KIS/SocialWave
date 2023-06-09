import React from "react";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer.js";
import { connect } from "react-redux";




class HeaderContainer extends React.Component {
 
  componentDidMount() {
    this.props.getAuthUserData()
}
 
  render(){
     return (
   <Header/>
  );
  }
 
};

let mapStateToProps = (state) => ({
    isAuth :state.auth.isAuth,
    login:state.auth.login
})


export default connect(mapStateToProps,{getAuthUserData} )(HeaderContainer) ;
