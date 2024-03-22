import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <img src="" alt="" />
      <div>
        <span>Expresso Tradicional</span>

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
          <Trash />
          Remover
        </button>
      </div>

      <span>R$ 9,90</span>
    </CardContainer>
  )
}
