import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CoffesSelected,
  FormContainer,
  OrderAdressInfo,
  OrderInfo,
  Payment,
  Cart,
} from './styles'

import { useForm } from 'react-hook-form'
import { Card } from './components/Card'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { register } = useForm()
  const navigate = useNavigate()

  function VerifyAddressAndPayment() {
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <OrderInfo>
        <h3>Complete seu pedido</h3>

        <OrderAdressInfo>
          <form action="">
            <div>
              <MapPinLine />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <FormContainer>
              <input type="text" {...register('zip-code')} placeholder="CEP" />
              <input type="text" {...register('street')} placeholder="Rua" />
              <input
                type="number"
                {...register('number')}
                placeholder="Número"
              />
              <div className="inputComplement">
                <input
                  type="text"
                  {...register('complement')}
                  placeholder="Complemento"
                />
                <span>Opcional</span>
              </div>
              <div>
                <input
                  type="text"
                  {...register('district')}
                  placeholder="Bairro"
                  className="bairroInput"
                />
                <input type="text" {...register('city')} placeholder="Cidade" />
                <input type="text" {...register('uf')} placeholder="UF" />
              </div>
            </FormContainer>
          </form>
        </OrderAdressInfo>

        <Payment>
          <div>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="paymentOptions">
            <button>
              <CreditCard />
              Cartão de crédito
            </button>
            <button>
              <Bank />
              Cartão de débito
            </button>
            <button>
              <Money />
              Dinheiro
            </button>
          </div>
        </Payment>
      </OrderInfo>

      <Cart>
        <h3>Cafés selecionados</h3>

        <CoffesSelected>
          <Card />
          <Card />

          <div className="sum">
            <div className="text">
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>

            <div className="text">
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div className="text">
              <strong>Total</strong>
              <span>R$ 33,20</span>
            </div>
          </div>

          <button onClick={VerifyAddressAndPayment}>Confirmar pedido</button>
        </CoffesSelected>
      </Cart>
    </CheckoutContainer>
  )
}
