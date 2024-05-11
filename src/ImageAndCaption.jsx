export default function ImageAndCaption({name,url}){
    return(
        <>
        <h2>my image</h2>
        <img src={url} height="100px"alt={name}/>
        <h3>{name}</h3>
        </>
    )
}