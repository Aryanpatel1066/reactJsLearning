import { useParams } from "react-router-dom";
import blogPosts from "./blogPostData";

export default function BlogDetails() {
    const { id } = useParams();
    const blogPostId = parseInt(id);
    const blog = blogPosts.find(blog => blog.id === blogPostId); // Corrected line

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <>
            <h2>{blog.title}</h2>
            <p>By {blog.author} on {blog.date}</p>
            <p>{blog.content}</p>
        </>
    );
}
