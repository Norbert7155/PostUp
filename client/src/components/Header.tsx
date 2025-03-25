import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 60px;
    display:flex;
    flex-direction:row;
    justify-content:space-between; 
    align-items:center;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const StyledUl = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    list-style-type:none;
    font-size:1.5rem;

    li{
        margin:0 20px;
        cursor:pointer;
    }
    li:last-child{
        margin-right:0;
    }
`;

const Header = () => {

    return(
        <StyledHeader>
            <h1>PostUp</h1>
            <StyledUl>
                <li>Posts</li>
                <li>Users</li>
                <li>Login</li>
            </StyledUl>
        </StyledHeader>
    )
};
export default Header;