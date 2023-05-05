import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 2rem 10rem;

    h1 {
        color: ${props => props.theme['base-subtitle']};
        font-family: 'Baloo 2', sans-serif;
    }
`

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    padding-top: 2.125rem;

    @media (max-width: 1270px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme['base-card']};

    border-radius: 6px 36px;

    padding: 0 1.25rem;

    max-width: 256px;

    img {
        max-height: 7.5rem;
        max-width: 7.5rem;

        margin-bottom: 0.75rem;

        position: relative;

        top: -20px;
    }

    span {
        font-size: 0.625rem;
        line-height: 0.8125rem;
        font-weight: bold;

        text-align: center;

        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        padding: 4px 8px;

        border-radius: calc(0.8125rem / 2);
    }

    h2 {
        font-size: 1.25rem;
        font-family: 'Baloo 2', sans-serif;
        line-height: 1.5rem;

        text-align: center;

        color: ${props => props.theme['base-subtitle']};

        margin-top: 1rem;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.125rem;

        text-align: center;

        color: ${props => props.theme['base-label']};
        
        margin: 1.25rem 0.5rem;
    }
`

export const ItemInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 1.25rem;

    span{
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: normal;

        background-color: transparent;
        color: ${props => props.theme['base-text']};
    }

    p {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 800;

        color: ${props => props.theme['base-subtitle']};
        font-family: 'Baloo 2', sans-serif;

        margin: 0;
        margin-right: 1.5rem;
    }
`

export const AddCartButton = styled.button`
    background-color: ${props => props.theme['purple-dark']};

    padding: 6px 8px;

    border: none;
    border-radius: 6px;

    margin-left: 0.375rem;

    &:hover {
        cursor: pointer;
    }

    svg {
        color: ${props => props.theme['base-card']};
    }
`
