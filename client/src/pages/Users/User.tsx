import avatar from "../../assets/avatar.png"
import styled from "styled-components";

interface UserProps {
    id: string;
    username: string;
}

const StyledUserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin:10px 0px;
    z-index: 1;
    width: 80%;

    &:hover{
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 25px;
    }
`;

const User: React.FC<UserProps> = ({id , username}) => {
    return (
        <StyledUserContainer key={id}>
            <img src={avatar} alt="User Avatar" />
            <h2>{username}</h2>
        </StyledUserContainer>
    );
};
export default User;