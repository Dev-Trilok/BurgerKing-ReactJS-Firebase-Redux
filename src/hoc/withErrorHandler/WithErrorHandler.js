
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
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
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
