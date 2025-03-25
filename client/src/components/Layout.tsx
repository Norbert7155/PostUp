import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StyledLayout = styled.div`
    padding: 20px 60px;
    z-index: 100;
`;
    

const Layout = ({ children } : any) => {
    return (
        <StyledLayout>
            <Header/>
                {children}
            <Footer/>
        </StyledLayout>
    );
};
export default Layout;