import React from "react";
 import './App.css';
//dummy data
const exampleItems = [
  {  idName: "handlebars", Current: "4.0.10", Latest:"4.0.11" ,Outdated:"Yes",Vulnerable:"NO"},
  { idName: "webpack", Current: "1.15.0", Latest: "1.15.0" ,Outdated:"Yes",Vulnerable:"NO"},
]



class App extends React.Component {
  constructor() {
      super();
    this.state = {
          exampleItems: exampleItems,
      };

  
  }

  // The api don’t provide mock data ,so I use the dummy data
  // componentDidMount(){
  //   fetch(' ​https://api.github.com/users/minlinzhang/repos')
  // .then(response => response.json())
  // .then(data => this.setState({exampleItems:data}));
  // }

  render() {
      return (
          <div>
          <table>
        <thead>
          <tr>
            <th >Package name</th>
            <th > Current</th>
            <th > Latest </th>
            <th > Outdate</th>
            <th > Vulnerable</th>
          </tr>
        </thead>
        <tbody>
        {this.state.exampleItems.map(item =>
                          <tr key={item.id} >
                                         <td >{item.idName}</td>
                                          <td >{item.Current}</td>
                                           <td >{item.Latest}</td>
                                           <td >{item.Outdated}</td>
                                           <td >{item.Vulnerable}</td>
                                        </tr>

                      )}
        </tbody>
      </table>                       
             
          </div>
      );
  }
}

export default App;