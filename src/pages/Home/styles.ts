import styled from 'styled-components'

import banner from '../../assets/banner.png'

export const HomeContainer = styled.div``

export const Banner = styled.div`
  height: 54.4rem;
  background-image: url(${banner});
  background-size: cover;
  padding: 9.4rem 16rem 10.8rem;
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 58.8rem;

    h1 {
      font-family: 'Baloo 2';
      font-size: 4.8rem;
      font-weight: 800;
      margin-bottom: 1.6rem;
      line-height: 130%;
      color: ${({ theme }) => theme['base-title']};
    }

    p {
      font-size: 2rem;
      color: ${({ theme }) => theme['base-subtitle']};
      line-height: 130%;
    }
  }

  ul {
    width: 56.7rem;
    height: 8.4rem;
    margin-top: 6.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    li {
      display: inline-flex;
      align-items: center;
      svg {
        width: 3.2rem;
        height: 3.2rem;
        padding: 8px;
        border-radius: 50%;
        margin-right: 1.2rem;
        path {
          fill: ${({ theme }) => theme.background};
        }
      }
    }

    li:last-child {
      padding-right: 11px;
    }
    .cart {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }
    .package {
      background-color: ${({ theme }) => theme['base-text']};
    }
    .timer {
      background-color: ${({ theme }) => theme.yellow};
    }
    .coffee {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`
