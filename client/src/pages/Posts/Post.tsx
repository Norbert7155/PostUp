import styled from "styled-components";
import avatar from "../../assets/avatar.png"

const StyledPostConteiner = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin:10px 0px;
    z-index: 1;

`;

const StyledPostHeader = styled.div`
    display: flex;
    align-items: center;
    p{
        font-weight: bold;
    }

    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 25px;
    }
`;


interface PostType {
    id: number,
    title: string,
    content: string,
    userId: number,
};


const Post:React.FC<PostType> = ({id, title, content, userId}) => {
    return (
        <StyledPostConteiner key={id}>
            <StyledPostHeader>
                <img src={avatar} alt="avatar"/>
                <p>{title}</p>
            </StyledPostHeader>
            <p>{content}</p>
            
        </StyledPostConteiner>
    );
};
export default Post;