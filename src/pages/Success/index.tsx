import { Card, SuccessContainer } from './styles'

import delivery from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Card>
          <div className="info">
            <MapPin />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="info">
            <Timer />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </div>
          </div>

          <div className="info">
            <CurrencyDollar />
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </Card>
      </div>

      <img src={delivery} alt="" />
    </SuccessContainer>
  )
}
