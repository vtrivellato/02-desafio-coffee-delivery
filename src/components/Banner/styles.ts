import styled from 'styled-components'

export const BannerContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 3.5rem;
    
    padding: 5.875rem 10rem 6.75rem;

    max-width: 1440px;
    margin: 0 auto;
`

export const BannerContent = styled.div`
    header {
        color: ${props => props.theme['base-title']};

        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        line-height: 3.9rem;
    }
    
    main {
        color: ${props => props.theme['base-subtitle']};
        
        border-top: 1rem;

        font-size: 1.25rem;
        line-height: 1.625rem;
    
        margin-top: 1rem;
    }
`

export const BannerImage = styled.img`
    height: 20rem;

    @media (max-width: 1420px) {
        height: 18rem;
    }

    @media (max-width: 1380px) {
        height: 16rem;
    }

    @media (max-width: 1270px) {
        height: 14rem;
    }
`

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    
    margin-top: 4.125rem;
    
    i {
        padding: 8px;

        max-height: 32px;
        max-width: 32px;
    }

    @media (max-width: 1270px) {
        display: flex;
        flex-direction: column;
    }
`

export const Item = styled.div<{
    backGroundColor: string
}>`
    display: flex;
    gap: 0.75rem;

    height: 2 rem;
 
    i {
        background-color: ${props => props.backGroundColor};
        border-radius: 50%;
    }

    p {
        color: ${props => props.theme['base-text']};
        font-size: 1rem;
        line-height: 1.3rem;
    }
`
