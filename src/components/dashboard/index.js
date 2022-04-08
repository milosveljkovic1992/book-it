import React from 'react';

import { 
    Container,
    InnerContainer,
    InnerColumn,
    InnerContents,
    SectionTitle } from './styles/dashboard';

const Dashboard = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Dashboard.Inner = ({ children, ...restProps }) => {
    return <InnerContainer {...restProps}>{children}</InnerContainer>
}

Dashboard.Column = ({ children, ...restProps }) => {
    return <InnerColumn {...restProps}>{children}</InnerColumn>
}

Dashboard.InnerContents = ({ children, ...restProps }) => {
    return <InnerContents {...restProps}>{children}</InnerContents>
}

Dashboard.Title = ({ children, ...restProps }) => {
    return <SectionTitle {...restProps}>{children}</SectionTitle>
}


export default Dashboard;