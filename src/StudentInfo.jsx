export default function StudentInfo ({studentLdrp}){
   const{name,english,maths,computers}=studentLdrp;

   const total = english+maths+computers;
   let grade = " ";

    // const gradOfStud = total=>{
       if(total >= 225){
         grade = "A";
        }
       else if(total >= 180){
          grade = "B";
        }
       else if(total >=150){
          grade = "C";
        }
       else{
        grade = "D";
         }
    // }

    return(
        <>
        <h3>student details</h3>
          <h4>name:{name}</h4>
          <h4>english:{english}</h4>
          <h4>maths:{maths}</h4>
          <h4>computer:{computers}</h4>
          <h3><span style={{color:"red"}}>Total:</span>{total}</h3>
          <h3><span style={{color:"blueviolet"}}>grade:</span>{grade} </h3>
        </>
    )
}
  