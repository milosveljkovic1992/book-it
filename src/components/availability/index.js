import React from 'react';
import {
    Container,
    Heading, 
    Info,
    Row,
    Column,
    Input,
    Button
} from './styles/availability';

const Availability = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Availability.Heading = ({ children, ...restProps }) => {
    return <Heading {...restProps}>{children}</Heading>
}

Availability.Info = ({ children, ...restProps }) => {
    return <Info {...restProps}>{children}</Info>
}

Availability.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

Availability.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

Availability.Input = ({ ...restProps }) => {
    return <Input {...restProps} />
}

Availability.Button = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>
}

export default Availability