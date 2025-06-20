export default function EmployeeCard(){
const backgroundColor = 'lightgreen'
const color = 'darkgreen';
const borderRadius = '5px';
const padding = '10px';
 
    return(
        <>
        
        <b style={{color:"green"}}>name:</b> aryanpatel
        <b style={{color:"blue"}}>designation:</b> webdevloper
        <b style={{color:"pink"}}>workExperience:</b> fresher

        <br />
        <button style={{color:color,backgroundColor:backgroundColor,borderRadius:borderRadius,padding:padding}}>starts</button>
         
        </>
    )
} 