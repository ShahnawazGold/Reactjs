

import { placeholder } from "@babel/types";

import React, { Component } from 'react';
//1st step    npm install --save firebase uuid

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


class Firebaseapp extends Component {

    //here 2nd step 
    constructor(props) {
        super(props);
        this.state = {
            uid :uuid.v1(),
            studentName :'',
            answers: {
                answer1: '',
                answer2: '',
                answer3 :'',

            },
            isSubmitted :false 
        };

        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerrSelected =this.answerrSelected.bind(this);
        this.questionSubmit =this.questionSubmit.bind(this);

    }

    //here make function
    nameSubmit (event ){
        var studentName = this.refs.name.value;
        this.setState({ studentName: studentName  },function () {
            console.log(this.state);
        });
    }

    //here step 3 ===
    answerrSelected(){
        //here todo wordk
    }
    //here step 3.1
    questionSubmit(){
        //here todo work
         firebase.database().ref('tb_students/'+this.state.uid).set({
           
            studentName : this.state.studentName,
            answers : this.state.answers
         })
         this.setState({ isSubmitted : true });

    }

     
    render() { 
        var studentName;
        var questions ;

        if(this.state.studentName === '' && this.state.isSubmitted === false ){

            studentName = <div>
               <h1>hey students pls your name </h1>

               <form onSubmit={this.nameSubmit}>
                  <input type ="text" placeholder="Enter your name " ref="name" />

               </form>
            </div>;
            questions = ''

        }else if(this.state.studentName !== '' && this.state.isSubmitted === false){
            studentName= <h1>welcome to You survey , {this.state.studentName}</h1>;
            questions =<div>
                  <h2>Here are some questions</h2>
                  <form onSubmit={this.questionSubmit}>
                    <div className="card">
                        <h5> what kind courses you like the most </h5> <br /><br />
                       <input  type="radio"  name ="answer1" value ="Reactjs" onChange={this.answerrSelected}/> Reactjs
                       <input  type="radio"  name ="answer1" value ="React Native" onChange={this.answerrSelected}/>React Native 
                       <input  type="radio"  name ="answer1" value ="Android " onChange={this.answerrSelected}/> Android

                    </div>
                    <div className="card">
                        <h5 >Are you : </h5> <br /> <br />
                       <input  type="radio"  name ="answer2" value ="Student" onChange={this.answerrSelected}/>Student
                       <input  type="radio"  name ="answer2" value ="Job" onChange={this.answerrSelected}/>Job
                       <input  type="radio"  name ="answer2" value ="looking-job" onChange={this.answerrSelected}/>looking-job

                    </div>
                    <div className="card">
                        <h5 >Apptron learning Help full : </h5> <br /><br />
                       <input  type="radio"  name ="answer3" value ="yes" onChange={this.answerrSelected}/> yes
                       <input  type="radio"  name ="answer3" value ="no" onChange={this.answerrSelected}/>no
                       <input  type="radio"  name ="answer3" value ="may be" onChange={this.answerrSelected}/> may be
                    </div>
                    <br /><br />
                     <input className ="feedback-button" type="submit" value ="submit"/>

                  </form>

                  </div> 
        }

        return (
            <div>
                Firebaseapp
                {studentName}
                --------------------------
                {questions}

            </div>
        );
    }
}
 
export default Firebaseapp;