import styled from 'styled-components';

export const AmountControlContainer = styled.div`
    display: flex;
    justify-content: space-around;

    background-color: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-title']};

    border-radius: 6px;

    width: 72px;

    overflow: hidden;

    &:focus {
        outline: 1px solid blue;
    }

    input {
        font-size: 1rem;
        line-height: 1.25rem;

        background-color: transparent;

        max-width: 20px;

        border: none;
        outline: none;

        text-align: center;        
    }

    input:focus {
        outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    button {
        background-color: transparent;
        color: ${props => props.theme['purple']};

        font-size: 1.5rem;

        border: none;

        margin: 0 0.5rem;

        :hover {
            cursor: pointer;
        }
    }
`