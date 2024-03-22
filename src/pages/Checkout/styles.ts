import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 112rem;
  margin: 4rem auto 0;

  display: flex;

  h3 {
    font-size: 1.8rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 15px;
  }

  section {
    padding: 4rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-card']};
  }

  input,
  .inputComplement {
    height: 4.2rem;
    padding: 1.2rem;
    border-radius: 4px;
    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
  }
`

export const OrderInfo = styled.div``

export const OrderAdressInfo = styled.section`
  max-width: 64rem;
  margin-bottom: 12px;
  margin-right: 32px;

  div:first-child {
    display: flex;
    gap: 8px;

    svg {
      font-size: 2.2rem;
      color: ${({ theme }) => theme['yellow-dark']};
    }

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
      font-size: 1.4rem;
      margin-top: 2px;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
  width: 100%;
  margin-top: 3.2rem;

  > div:last-child {
    display: flex;
    width: 100%;
    gap: 0 12px;

    .bairroInput {
      width: 20rem;
    }

    input:nth-child(2) {
      flex: 1;
    }

    input:last-child {
      width: 6rem;
    }
  }

  > .inputComplement {
    width: 34.8rem;
    padding: 0;
    display: flex;
    justify-content: space-between;

    > input {
      width: 27.4rem;
      background: transparent;
      border: none;
    }

    > span {
      display: flex;
      flex: 1;
      font-style: italic;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: ${({ theme }) => theme['base-label']};
    }
  }

  > input:first-child,
  input:nth-child(3),
  input:nth-child(5) {
    width: 20rem;
  }

  > input:nth-child(2) {
    width: 100%;
  }
`

export const Payment = styled.section`
  max-width: 64rem;

  > div:first-child {
    display: flex;
    gap: 8px;
  }

  .paymentOptions {
    margin-top: 32px;
    display: flex;
    gap: 12px;

    button {
      width: 100%;
      height: 5.1rem;
      border-radius: 6px;
      border: none;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      text-transform: uppercase;
      gap: 12px;
      padding: 1.6rem;
      background: ${({ theme }) => theme['base-button']};
      color: ${({ theme }) => theme['base-text']};
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme['base-hover']};
      }

      &:active {
        background: ${({ theme }) => theme['purple-light']};
        border: 1px solid ${({ theme }) => theme.purple};
      }

      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.purple};
      }
    }
  }
`

export const CoffesSelected = styled.section``

export const Cart = styled.div``
