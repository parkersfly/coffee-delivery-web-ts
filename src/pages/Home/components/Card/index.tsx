import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { CardContainer, Qntd } from './styles'

import coffeeTradicional from '../../../../assets/coffee-tradicional.png'

export interface CoffeeType {
  id: number
  coffeeImageUrl: string
  tags: []
  name: string
  description: string
}

interface Tag {
  id: number
  name: string
}

interface CoffeeProps {
  coffee: CoffeeType
}

export function Card({ coffee }: CoffeeProps) {
  return (
    <CardContainer>
      <header>
        <img src={coffee.coffeeImageUrl} alt="" />
      </header>

      <main>
        <div>
          {coffee.tags.map((tag) => {
            return <span key={tag.id}>{tag.name}</span>
          })}
        </div>

        <p>{coffee.name}</p>
        <p>{coffee.description}</p>
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
