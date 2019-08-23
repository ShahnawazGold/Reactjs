
import React, { Component } from 'react';

import firebase from 'firebase';
import uuid from 'uuid';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7xsVTTWorJjiyxIPCFBlZZpMM-oExNp4",
    authDomain: "android305-ac5dd.firebaseapp.com",
    databaseURL: "https://android305-ac5dd.firebaseio.com",
    projectId: "android305-ac5dd",
    storageBucket: "android305-ac5dd.appspot.com",
    messagingSenderId: "146163137975",
    appId: "1:146163137975:web:f9a088c3e0423ca9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 


 
class FirebaseLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            err :'',
            uid :uuid.v1()
        };

        this.login=this.login.bind(this);
        this.signup =this.signup.bind(this);
        
    }

    //here method 
    login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password)
        
        const auth =firebase.auth();
        const promise =auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => {
            var err=e.message;
            console.log(err)
            this.setState({err :err  });
            
        })

    }
    //here 
    signup(){

        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password)
        
        const auth =firebase.auth();
        const promise =auth.createUserWithEmailAndPassword(email, password);
        promise
        .then(user => {
            var err = "welcome "+user.email;
            firebase.database().ref('tb_user/'+this.state.uid).set({
               email: user.email
             })
             console.log(err)
             this.setState({err :err  });
        });
        promise
        .catch(e => {
          
            var err=e.message;
            console.log(err)
            this.setState({err :err  });
        });
    }
     
    render() { 
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder ="Enter Email" /> <br/>
                <input id="passs" ref="password" type="password" placeholder ="Enter password" /><br/><br/>
                <button onClick ={this.login} >Login</button><br/>
                <button onClick ={this.signup}>sign up</button><br/>
                <button>Log out</button>
            </div>
        );
    }
}
 
export default FirebaseLogin;