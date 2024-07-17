// import { useReducer } from "react"
// function reducer(state,action){
//    if(action.type==='incrementage'){
//     return{
//         age:state.age+1
//    };
//    }
// }
// export default function Reducers(){
//     const [state,dispatch]=useReducer(reducer,{age:11});

    
//     return(
//         <>
//         <h1>reducer function</h1>
//         <button onClick={()=>dispatch({type:'incrementage'})}>increment age</button>
//         <h4>hello you are :{state.age}</h4>
//         </>
//     )
// }
import { useReducer } from "react"
function valueChanger(state,action){
    switch(action.type){
     case'increment':{
       return{
        value:state.value+10
     };
     }
     case'decrement':{
        return{
        value:state.value-10
        };
     }
     default :{
        return
            state
        
     }
    }
}
export default function Reducers(){
    const [state,dispatch]=useReducer(valueChanger,{value:10});
return(
    <>
    
    <h1>{state.value}</h1>
    <button onClick={()=>dispatch({type:'increment'})}>increse by <b>10</b></button>
    <button onClick={()=>dispatch({type:'decrement'})}>decrese by <b>10</b></button>
    </>
)
}

//hear we define the reducer with state,and dispatch the initial value of state is 10 and second thing was dispatch function to updated value state and also we make or call valuechanger reducer function in gui portion we make two button and apply click event call the dispatch function and pass the event name like increse or decrese the reducer function take the value from dispatch function and initial state check in switch case and return according value