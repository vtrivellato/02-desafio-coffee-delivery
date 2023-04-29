import { ShoppingCartSimple } from "phosphor-react";

import { CoffeeListContainer, ItemContainer, Item, ItemInfo, AddCartButton } from "./styles";

import coffee1 from '../../assets/coffee-1.svg';

export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h1>Nossos cafés</h1>

            <ItemContainer>
                <Item>
                    <img src={coffee1} />
                    <span>Tradicional</span>
                    <h2>Expresso tradicional</h2>
                    <p>
                        O tradicional café feito com água quente e grãos moídos
                    </p>
                    <ItemInfo>
                        <span>R$</span>
                        <p>9,90</p>
                        <input type="number" name="" id="" />
                        <AddCartButton onClick={() => console.log('X')}>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </AddCartButton>
                    </ItemInfo>
                </Item>
                
                <Item>
                    <img src={coffee1} />
                    <span>Tradicional</span>
                    <h2>Expresso tradicional</h2>
                    <p>
                        O tradicional café feito com água quente e grãos moídos
                    </p>
                    <ItemInfo>
                        <span>R$</span>
                        <p>9,90</p>
                        <input type="number" name="" id="" />
                        <AddCartButton onClick={() => console.log('X')}>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </AddCartButton>
                    </ItemInfo>
                </Item>
                
                <Item>
                    <img src={coffee1} />
                    <span>Tradicional</span>
                    <h2>Expresso tradicional</h2>
                    <p>
                        O tradicional café feito com água quente e grãos moídos
                    </p>
                    <ItemInfo>
                        <span>R$</span>
                        <p>9,90</p>
                        <input type="number" name="" id="" />
                        <AddCartButton onClick={() => console.log('X')}>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </AddCartButton>
                    </ItemInfo>
                </Item>
                
                <Item>
                    <img src={coffee1} />
                    <span>Tradicional</span>
                    <h2>Expresso tradicional</h2>
                    <p>
                        O tradicional café feito com água quente e grãos moídos
                    </p>
                    <ItemInfo>
                        <span>R$</span>
                        <p>9,90</p>
                        <input type="number" name="" id="" />
                        <AddCartButton onClick={() => console.log('X')}>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </AddCartButton>
                    </ItemInfo>
                </Item>
                
                <Item>
                    <img src={coffee1} />
                    <span>Tradicional</span>
                    <h2>Expresso tradicional</h2>
                    <p>
                        O tradicional café feito com água quente e grãos moídos
                    </p>
                    <ItemInfo>
                        <span>R$</span>
                        <p>9,90</p>
                        <input type="number" name="" id="" />
                        <AddCartButton onClick={() => console.log('X')}>
                            <ShoppingCartSimple size={22} weight="fill" />
                        </AddCartButton>
                    </ItemInfo>
                </Item>
            </ItemContainer>
        </CoffeeListContainer>
    )
}