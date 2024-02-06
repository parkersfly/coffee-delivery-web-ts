import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Banner, HomeContainer, Info } from './styles'

import coffeeBrand from '../../assets/coffee-brand.png'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <Info>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ul>
            <li>
              <ShoppingCart size={16} weight="fill" className="cart" />
              <p>Compra simples e segura</p>
            </li>
            <li>
              <Package size={16} weight="fill" className="package" />
              <p>Embalagem mantém o café intacto</p>
            </li>
            <li>
              <Timer size={16} weight="fill" className="timer" />
              <p>Entrega rápida e rastreada</p>
            </li>
            <li>
              <Coffee size={16} weight="fill" className="coffee" />
              <p>O café chega fresquinho até você</p>
            </li>
          </ul>
        </Info>
        <img src={coffeeBrand} alt="" />
      </Banner>
    </HomeContainer>
  )
}
