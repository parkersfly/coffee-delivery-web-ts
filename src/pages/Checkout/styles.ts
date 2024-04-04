import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 4rem auto 0;
  display: grid;
  grid-template-areas:
    'address total'
    'payment total';
  gap: 3.2rem;

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
  margin-bottom: 12px;

  grid-area: address;

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

  input {
    font-size: 1.4rem;
    color: ${({ theme }) => theme['base-text']};
  }

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
    flex: 1;
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

      svg {
        font-size: 16px;
        color: ${({ theme }) => theme.purple};
      }
    }
  }
`

export const CoffesSelected = styled.section`
  grid-area: total;

  border-radius: 6px 44px !important;

  > div:first-child {
    padding-bottom: 2.4rem;
  }

  > div + div {
    padding: 2.4rem 0;
  }

  .sum {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .text {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    justify-content: space-between;
  }

  .text:last-child {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  > button:last-child {
    width: 100%;
    height: 4.6rem;
    padding: 1.2rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const Cart = styled.div``
