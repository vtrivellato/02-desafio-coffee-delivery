import { useTheme } from 'styled-components';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { BannerContainer, BannerContent, BannerImage, Item, ItemContainer } from './styles';

import bannerImage from '../../assets/banner.png'

export function Banner() {
    const theme = useTheme();

    return (
        <BannerContainer>
            <BannerContent>
                <header>
                    Encontre o café perfeito para qualquer hora do dia
                </header>

                <main>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </main>

                <ItemContainer>
                    <Item backGroundColor={theme['yellow-dark']}>
                        <i>
                            <ShoppingCart size={16} weight="fill" />
                        </i>                        
                        <p>
                            Compra simples e segura
                        </p>
                    </Item>
                    <Item backGroundColor={theme['base-text']}>
                        <i>
                            <Package size={16} weight="fill" />
                        </i>                        
                        <p>
                            Embalagem mantém o café intacto
                        </p>
                    </Item>
                    <Item backGroundColor={theme['yellow']}>
                        <i>
                            <Timer size={16} weight="fill" />
                        </i>                        
                        <p>
                            Entrega rápida e rastreada
                        </p>
                    </Item>
                    <Item backGroundColor={theme['purple']}>
                        <i>
                            <Coffee size={16} weight="fill" />
                        </i>                        
                        <p>
                            O café chega fresquino até você
                        </p>
                    </Item>
                </ItemContainer>
            </BannerContent>
            <BannerImage src={bannerImage}>

            </BannerImage>
        </BannerContainer>
    )
}