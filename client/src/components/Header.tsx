import styled from "styled-components";
import { Link } from "react-router-dom";

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
    z-index: 100000000;
    background-color: #fff;
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
    Link{
        text-decoration:none;
        color:black;
        cursor:pointer;
    }
    a, a:visited, a:active, a:focus {
        color: black;               
        text-decoration: none;     
        outline: none;           
        -webkit-tap-highlight-color: transparent; 
    }
    a:hover{
        color: #007BFF; 
    }
    Link:hover{
        color: #007BFF;}
`;

const Header = () => {

    return(
        <StyledHeader>
            <h1>PostUp</h1>
            <StyledUl>
                <Link to="/post"><li>Posts</li></Link>
                <Link to="/users"><li>Users</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </StyledUl>
        </StyledHeader>
    )
};
export default Header;