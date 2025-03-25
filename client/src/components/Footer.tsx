import styled from "styled-components";

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display:flex;
    padding: 10px 60px;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    background-color: #333;
    color: #fff;
    padding: 10px;
    z-index: 100000000;
`;

const Footer = () => {
    return(
        <StyledFooter>
            <h1>PostUp</h1>
            <p>&copy; 2025 PostUp</p>
        </StyledFooter>
    )
};
export default Footer;