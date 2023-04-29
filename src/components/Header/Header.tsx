import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />

            <nav>
                <span>
                    <MapPin size={20} weight="fill"/>
                    <p>Porto Alegre - RS</p>
                </span>

                <a>
                    <ShoppingCart size={20} weight="fill" />
                </a>
            </nav>
        </HeaderContainer>
    )
}