import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.png'
import { HeaderContent, Location, Cart } from './styles'

export function Header() {
  return (
    <HeaderContent>
      <img
        src={logoCoffeeDelivery}
        alt="Um copo de café roxo, com um foguete branco decolando no centro do copo"
      />
      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" />
          {/* <span>0</span> */}
        </Cart>
      </nav>
    </HeaderContent>
  )
}
