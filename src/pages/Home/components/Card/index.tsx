import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { CardContainer, Qntd } from './styles'

import tradicionalCoffee from '../../../../assets/coffee-tradicional.png'

export function Card() {
  return (
    <CardContainer>
      <header>
        <img src={tradicionalCoffee} alt="" />
      </header>

      <main>
        <span>Tradicional</span>
        <p>Expresso Tradicional</p>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </main>

      <footer>
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <Qntd>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </Qntd>

          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
