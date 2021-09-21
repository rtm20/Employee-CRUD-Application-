import React from 'react';

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            searchQuery2: ""
                 
        }
    }
    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
      }

      handleInputChanged1(event) {
        this.setState({
          searchQuery2: event.target.value
        });
      }

    handleButtonClicked() {
        var searchQuery = this.state.searchQuery;
    
        window.location.href = "https://www.youtube.com/results?search_query=" + searchQuery;
      }
      handleButtonClicked1() {
        var searchQuery2 = this.state.searchQuery2;
    
        window.location.href = "https://www.google.com/search?q=" + searchQuery2;
      }

    render() {
        return (
            <div >
                <header >
                <nav class="navbar navbar-light bg-light justify-content-between" >
                    
                    <a className="navbar-brand"><h3 ><b><div className="text-center"><div class="text-success"><a href="https://www.johndeere.com" target="_blank"  style={{color: "green"}}>JOHN DEERE </a></div></div>Employee Management Portal (EMP) </b></h3></a>
                    <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder=" Search Youtube" aria-label="Search" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
                     <button type="button" class="btn btn-danger btn-lg" onClick={this.handleButtonClicked.bind(this)} >
                         Search
                    </button><br/>
                    &nbsp;&nbsp;&nbsp;

    
    <input  class="form-control mr-sm-2" type="search" placeholder=" Search Google" aria-label="Search" value={this.state.searchQuery2} onChange={this.handleInputChanged1.bind(this)}/>
    <button type="button" class="btn btn-success btn-lg" onClick={this.handleButtonClicked1.bind(this)} >
    Search
        </button><br/>
         
  </form>
                
                    </nav>
                </header>
            </div>
        )
    }
}


