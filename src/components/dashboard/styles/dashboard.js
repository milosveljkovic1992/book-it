import styled from 'styled-components/macro';
import { Heading } from '../../availability/styles/availability';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;

    background-color: rgba(0, 0, 0, .1)
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;

    width: 90%;
    max-width: 991px;
    padding: 20px;
    border-radius: 50px;
    background-color: white;
    
    @media (min-width: 600px) {
        padding: 50px;
    }

    @media (min-width: 991px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-template-rows: 1fr 100px;

        min-height: 50vh;
        min-width: 1100px;
        width: 100%;

    }
    
`;

export const BackButtonContainer = styled.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const InnerColumn = styled.div`
    display: flex;
    position: relative;

    height: 45vh;
    justify-content: center;

    background-color: #fff;
    
    @media (min-width: 991px) {
        height: 50vh;
    }
`;

export const InnerContents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    height: 100%;
    overflow: hidden;
    width: 90%;
    padding: 0;

    transition: .4s;

    @media (min-width: 991px) {
        max-height: 80vh;
    }
`;

export const Subheading = styled(Heading)``;

export const Back = styled.button`
    font-size: 1.125rem;
    padding: .5em 1em;
`;