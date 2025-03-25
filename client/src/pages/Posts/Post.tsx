import styled from "styled-components";

interface PostType {
    id: number,
    title: string,
    content: string,
    userId: number,
};


const Post:React.FC<PostType> = ({id, title, content, userId}) => {
    return (
        <div key={id}>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{userId}</p>
        </div>
    );
};
export default Post;