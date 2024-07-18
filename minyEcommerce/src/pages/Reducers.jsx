//  import { useReducer } from "react";

// function dispatchFunc(state,action){
//      switch(action.type){
//         case 'increment':{
//             return{
//                 value:state.value+10
//             };
//         }
//         case 'decrement':{
//             return{
//                 value:state.value-10
//             };
//         }
//         default :{
//             return state;
//         }
//      }
// }
// export default function Reducers(){
//     const [state,dispatch]=useReducer(dispatchFunc,{value:100});
//     return(
//         <>
//         <h3>{state.value}</h3>
//        <button onClick={()=>dispatch({type:'increment'})}>increment by 10 </button>
//        <button onClick={()=>dispatch({type:'decrement'})}>decrement by 10</button>
//         </>
//     )
// } 

/// question) 1 
// import React, { useReducer } from 'react';

// const initialState = { isVisible: true };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'toggle':
//             return { isVisible: !state.isVisible };
//         default:
//             return state;
//     }
// }

// export default function Reducers() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             {state.isVisible && <p>This is a visible text</p>}
//             <button onClick={() => dispatch({ type: 'toggle' })}>
//                 {state.isVisible ? 'Hide' : 'Show'}
//             </button>
//         </div>
//     );
// }

//question2: input field and age manage both 

import React, { useReducer } from "react";

export default function Reducers() {
    const initialState = { name: 'hulk', age: 20 };

    function reducer(state, action) {
        switch (action.type) {
            case 'getName':
                return {
                    ...state,
                    name: action.nextName
                };
            case 'incrementAge':
                return {
                    ...state,
                    age: state.age + 1
                };
            default:
                return state;
        }
    }

    function updateName(e) {
        dispatch({
            type: 'getName',
            nextName: e.target.value
        });
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <input onChange={updateName} />
            <button onClick={() => dispatch({ type: 'incrementAge' })}>Increment Age</button>
            <h1>Hello {state.name}, you are {state.age} years old.</h1>
        </>
    );
}
