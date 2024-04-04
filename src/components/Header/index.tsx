import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png'
import { HeaderContent, Location, Cart } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContent>
      <Link to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Um copo de café roxo, com um foguete branco decolando no centro do copo"
        />
      </Link>
      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Cart to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {/* <span>0</span> */}
        </Cart>
      </nav>
    </HeaderContent>
  )
}
