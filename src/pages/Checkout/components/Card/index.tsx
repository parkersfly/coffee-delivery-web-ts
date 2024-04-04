import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardContainer, OptionsGroup } from './styles'

import coffeeExample from '../../../../assets/coffees/tradicional.png'

export function Card() {
  return (
    <CardContainer>
      <img src={coffeeExample} alt="" />
      <div>
        <span>Expresso Tradicional</span>

        <OptionsGroup>
          <div>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>

          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </OptionsGroup>
      </div>

      <span>R$ 9,90</span>
    </CardContainer>
  )
}
