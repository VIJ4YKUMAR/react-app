import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: "",
    }; 
  }

  submitQuote = (event: any) => {
    event.preventDefault();
    const quote = this.state.quote;
    axios.get("http://127.0.0.1:5000/my_app",{
      params: {
        message:quote 
      }
    })
    this.form.reset()
  };

  handleChange = (event: any) => {
    this.setState({
      quote: event.target.value,
    });
  };

  render(){
    return(
      <div className="App">
        <form name="message_form" action="#" ref={form => this.form = form}>
          <label>
        {" "}
            <input type="text" name="message" placeholder="ENTER YOUR MESSAGE" maxLength={200} onChange={this.handleChange} />
          </label>
          <button class="button" onClick={this.submitQuote}>SEND</button>
        </form>
      </div>
    );
  }
}

export default App;
