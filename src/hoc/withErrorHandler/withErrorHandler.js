import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorhandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {

            axios.interceptors.request.use(req => {
                 this.setState({error: null})
                 return req;
             });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }



        errorConfirmedHandler () {
            this.setState({error: null})
        }
        
        render() {

  

       
                return (
                    <Aux>
                        <Modal show={this.state.error}
                                modalClose={this.errorConfirmHandler} >
                            {this.state.error}
                </Modal>
                        <WrappedComponent {...this.props} />

                    </Aux>

                );

            }
        }
    }

    export default withErrorhandler;