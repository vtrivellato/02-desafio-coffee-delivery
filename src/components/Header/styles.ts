import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    max-width: 1440px;
    margin: 0 auto;

    img {
        cursor: pointer;
    }

    nav {
        display: flex;
        gap: 0.75rem;

        span {
            display: flex;
            gap: 0.25rem;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            background-color: ${props => props.theme['purple-light']};
            color: ${props => props.theme['purple-dark']};

            padding-left: 0.5rem;
            padding-right: 0.5rem;
            border-radius: 8px;

            p {
                font-size: 0.875rem;
                line-height: 2.375rem;
            }
        }

        a {
            width: 2.375rem;
            border-radius: 8px;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: ${props => props.theme['yellow-light']};
            color: ${props => props.theme['yellow-dark']};

            cursor: pointer;
        }
    }
`