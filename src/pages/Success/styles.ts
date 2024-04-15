import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: end;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8rem;

    h3 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme['yellow-dark']};
      font-family: 'Baloo 2', sans-serif;
    }

    > p {
      font-size: 2rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  > img {
    width: 49.2rem;
    height: 29.3rem;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 52.6rem;
  height: 27rem;
  border-radius: 0.6rem 3.6rem;
  padding: 4rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 4rem;

  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;

  .info {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme['base-text']};
  }

  .icon {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.2rem;

    svg {
      color: ${({ theme }) => theme.background};
    }
  }

  .mapPin {
    background: ${({ theme }) => theme.purple};
  }

  .timer {
    background: ${({ theme }) => theme.yellow};
  }

  .currencyDollar {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
