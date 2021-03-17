
import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import AuxComp from "../AuxComp";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() 
    {
      this.reqInterceptor= axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor= axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
componentWillUnmount() {
  console.log('====================================');
  console.log("will Unmount", this.reqInterceptor, this.resInterceptor);
  console.log('====================================');
  axios.interceptors.request.eject(this.reqInterceptor);
  axios.interceptors.response.eject(this.resInterceptor);

}


    errorConfiremedHandler =()=>{
      this.setState({error:null})
    }


    render() {
      return (
        <AuxComp>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfiremedHandler} >
               {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </AuxComp>
      );
    }
  };
};

export default WithErrorHandler;
