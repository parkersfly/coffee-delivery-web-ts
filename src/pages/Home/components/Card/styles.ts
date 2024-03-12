import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 25.6rem;
  max-width: 37rem;
  height: 31rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 2rem;

  header {
    display: flex;
    justify-content: center;

    img {
      margin-top: -23px;
    }
  }

  main {
    text-align: center;

    > div {
      display: flex;
      margin: 1.2rem auto 1.6rem auto;
      justify-content: center;
    }

    span {
      display: block;
      max-width: max-content;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 999px;
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      margin-right: 4px;
    }

    p:nth-child(2) {
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Baloo 2';
      color: ${({ theme }) => theme['base-subtitle']};
      margin-bottom: 8px;
    }

    p:nth-child(3) {
      font-size: 1.4rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.3rem;
    padding: 0 4px;

    p {
      font-size: 1.4rem;

      span {
        font-size: 2.4rem;
        font-weight: 800;
        font-family: 'Baloo 2';
      }
    }

    > div {
      display: flex;
      gap: 8px;

      button {
        line-height: 0;
        background: none;
        border: none;
        cursor: pointer;
      }

      > button:last-child {
        width: 3.8rem;
        height: 3.8rem;
        padding: 8px;
        background: ${({ theme }) => theme['purple-dark']};
        border-radius: 6px;

        svg {
          color: ${({ theme }) => theme['base-card']};
        }
      }
    }
  }
`
export const Qntd = styled.div`
  height: 3.8rem;
  padding: 1.2rem 0.8rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    svg {
      color: ${({ theme }) => theme.purple};
    }
  }

  > span {
    color: ${({ theme }) => theme['base-title']};
  }
`
