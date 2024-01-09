// import React, { Component, createRef } from "react";

// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = createRef();
//   }
//   handleInput = () => {
//     this.callRef.current.value = "Ajeet Singh";
//     this.callRef.current.focus();
//   };

//   render() {
//     return (
//       <>
//         <div>
//           Name: <input type="text" ref={this.callRef} />
//           <button type="button" onClick={this.handleInput}>
//             Fill Name
//           </button>
//         </div>
//       </>
//     );
//   }
// }




//Below component is not a controlled component.

// import React, { Component, createRef } from "react";

// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = createRef();
//     this.state = {
//       name: "",
//     };
//   }

//   handleInput = () => {
//     this.callRef.current.value = "Ajeet Singh";
//     this.callRef.current.focus();

//     this.setState({ name: this.callRef.current.value });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           Name: <input type="text" ref={this.callRef} />
//           <button type="button" onClick={this.handleInput}>
//             Fill Name
//           </button>
//           <br /> <br />
//           You Filled Named: <b>{this.state.name}</b>
//         </div>
//       </>
//     );
//   }
// }



// import React, { Component, createRef } from "react";

// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = createRef();
//     this.state = {
//       name: "",
//     };
//   }

//   handleInput = (studentname) => {
//     this.callRef.current.value = studentname;
//     this.callRef.current.focus();

//     this.setState({ name: this.callRef.current.value });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           Name: <input type="text" ref={this.callRef} />
//           <button type="button" onClick={()=>this.handleInput("Chandan Kumar")}>
//             Fill Name
//           </button>
//           <br /> <br />
//           You Filled Named: <b>{this.state.name}</b>
//         </div>
//       </>
//     );
//   }
// }




// import React, { Component, createRef } from "react";

// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = createRef();
//     this.state = {
//       name: "",
//     };
//   }

//   handleInput = (e, studentname) => {
//     e.preventDefault();
//     this.callRef.current.value = studentname;
//     this.callRef.current.focus();

//     this.setState({ name: this.callRef.current.value });
//   };

//   render() {
//     return (
//       <>
//         <div>
//           <form onSubmit={(e) => this.handleInput(e, "Ram Kumar")}>
//             Name : <input type="text" ref={this.callRef} />
//             <button type="submit">Fill Name</button>
//             <br />
//             Your Filled Name : <b>{this.state.name}</b>
//           </form>
//         </div>
//       </>
//     );
//   }
// }


//self created

// import React, { Component, createRef } from "react";
// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = null;
//     this.setCallRef=(e)=>{
//       this.callRef = e;
//     }

//     this.state={
//       name:""
//     }
//   }
//   handleInput = () => {
//     this.callRef.value = "Pawan Singh";
//     this.callRef.focus();
//     this.setState({
//       name:this.callRef.value
//     })
//   };

//   render() {
//     return (
//       <>
//         <div>
//           Name: <input type="text" ref={this.setCallRef} />
//           <button type="button" onClick={this.handleInput}>
//             Fill Name
//           </button>
//           <br /><br />
//           You Filled Name : <b>{this.state.name}</b>
//         </div>
//       </>
//     );
//   }
// }





// import React, { Component, createRef } from "react";
// export class App extends Component {
//   constructor() {
//     super();
//     this.callRef = null;
//     this.setCallRef=(e)=>{
//       this.callRef = e;
//     }

//     this.state={
//       name:""
//     }
//   }
//   handleInput = () => {
//     this.callRef.value = "Pawan Singh";
//     this.callRef.focus();
//     this.setState({
//       name:this.callRef.value
//     })
//   };

//   render() {
//     return (
//       <>
//         <div>
//           Name: <input type="text" ref={this.setCallRef} />
//           <button type="button" onClick={this.handleInput}>
//             Fill Name
//           </button>
//           <br /><br />
//           You Filled Name : <b>{this.state.name}</b>
//         </div>
//       </>
//     );
//   }
// }





// import React, { Component, createRef } from 'react'
// const Input = (props) => {
//     return (
//         <>
//             Name :   <input type='text' ref={props.inputRef} />
//         </>
//     )
// }
// export class App extends Component {
//     constructor() {
//         super();
//         this.callRef = createRef();
//         this.state = {
//             name: ''
//         }
//     }

//     handleInput = () => {
//         this.callRef.current.value = "Pawan Singh";
//         this.callRef.current.focus();
//         this.setState({
//             name: this.callRef.current.value
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <Input inputRef={this.callRef} />
//                 <button type='button' onClick={this.handleInput}  >Fill Name</button>
//                 <br />
//                 You Filled Name : <b>{this.state.name}</b>
//             </div>
//         )
//     }
// }






// import React, { Component, createRef } from 'react'
// const Input = (props) => {
//     return (
//         <>
//             Name :   <input type='text' ref={props.inputRef} />
//         </>
//     )
// }
// export class App extends Component {
//     constructor() {
//         super();
//         this.callRef = null;
//         this.state = {
//             name: ''
//         }
//     }
//     handleInput = () => {
//         this.callRef.value = "Pawan Singh";
//         this.callRef.focus();
//         this.setState({
//             name: this.callRef.value
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <Input inputRef={(e) => this.callRef = e} />
//                 <button type='button' onClick={this.handleInput}  >Fill Name</button>
//                 <br />
//                 You Filled Name : <b>{this.state.name}</b>
//             </div>
//         )
//     }
// }






// import React, { Component, createRef } from 'react'
// const Input = (props) => {
//     return (
//         <>
//             Name :   <input type='text' ref={props.inputRef} />
//         </>
//     )
// }
// export class App extends Component {
//     constructor() {
//         super();
//         this.callRef = null;
//         this.state = {
//             name: ''
//         }
//     }
//     handleInput = () => {
//         this.callRef.value = "Pawan Singh";
//         this.callRef.focus();
//         this.setState({
//             name: this.callRef.value
//         });
//     }
//     // setCallRef = (e) => this.callRef = e;

//     setCallRef = (e) => {
//         this.callRef = e;
//     }

//     render() {
//         return (
//             <div>
//                 <Input inputRef={this.setCallRef} />
//                 <button type='button' onClick={this.handleInput}  >Fill Name</button>
//                 <br />
//                 You Filled Name : <b>{this.state.name}</b>
//             </div>
//         )
//     }
// }






import React, { Component, createRef, forwardRef } from 'react'
const Input = forwardRef((props, fRef) => {
    return (
        <>
            Name :   <input type='text' ref={fRef} />
        </>
    )
})
export class App extends Component {
    constructor() {
        super();
        this.callRef = createRef();
        this.state = {
            name: ''
        }
    }
    handleInput = () => {
        this.callRef.current.value = "Pawan Singh";
        this.callRef.current.focus();
        this.setState({
            name: this.callRef.current.value
        });
    }
    render() {
        return (
            <div>
                <Input ref={this.callRef} />
                <button type='button' onClick={this.handleInput}  >Fill Name</button>
                <br />
                You Filled Name : <b>{this.state.name}</b>
            </div>
        )
    }
}


