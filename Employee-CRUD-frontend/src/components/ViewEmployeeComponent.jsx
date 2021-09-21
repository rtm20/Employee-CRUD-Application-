import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
            
                <div class="col d-flex justify-content-center">
                    <h3 class="p-3 mb-2 bg-dark text-white"  style={{backgroundColor: "green"}}> Employee Card</h3><br/></div><br/>
                    <div className="text-center"><img class="img-fluid" src="https://png.pngitem.com/pimgs/s/172-1723533_john-deere-logo-transparent-john-deere-logo-hd.png" alt="..." class="img-thumbnail" width="320" height="320"/></div>
                    
                    <div class="col d-flex justify-content-center">
                        
                    <div  class="card" style={{width: "20rem"}}>
                    
                    <div className = "card-body" >
                    
                   
                        <h5> Employee First Name : { this.state.employee.firstName }</h5>
                        <h5> Employee Last Name : { this.state.employee.lastName }</h5>
                        <h5> Email ID : { this.state.employee.emailId }</h5>
                        </div></div>    
                        
                        
                        </div>
                        
            </div>
                
           
        )
    }
}

export default ViewEmployeeComponent
