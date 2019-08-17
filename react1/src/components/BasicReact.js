


// demo component exmple react

// import React, { Component } from 'react'
// export default class App extends Component {
//   render() {
//     return (
//       <div>

         
//          shah
//       </div>
//     )
//   }
// }

//========exple 2 tranry operator ====

// import React, { Component } from 'react';

// export class App extends Component {
//   render() {

//     // js code 
//        var i = 1 ;

//     return (
//       <div>
        
//          <h1>  { i == 1 ? 'true ' :'false'} </h1>
//       </div>
//     );
//   }
// }

//========== react styling here 



import React, { Component } from 'react';

export class App extends Component {
  render() {

    ///stle sheet 

      var styless = {
        fontSize:  22,
        color : '#FF0000'
      }
    return (
      <div>
         <h1 style ={ styless}>header   </h1>
      </div>
    );
  }
}

// export default App;

///=============reactjs componet ======