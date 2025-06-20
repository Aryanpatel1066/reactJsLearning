import blogPosts from "./blogPostData"
import { Link } from "react-router-dom"
export default  function BlogList(){
    return(
        <>
        <h1>blogData:</h1>
        <ul>
            {
                blogPosts.map(({id,title,author,date})=>(
                    <li key={id}>id:{id}, title:{title}, author:{author}, date:{date} <Link to={`/blogdetails/${id}`}>view more details</Link></li>
                ))
            }
        </ul>
        </>
    )
} 