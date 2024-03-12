import styled from 'styled-components'

import banner from '../../assets/banner.png'

export const HomeContainer = styled.div`
  > section {
    max-width: 112rem;
    padding: 3.2rem 0 15.7rem;
    margin: auto;

    h3 {
      font-size: 3.2rem;
      font-family: 'Baloo 2';
      color: ${({ theme }) => theme['base-subtitle']};
      margin-bottom: 5.4rem;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 40px 32px;
    }
  }
`

export const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
  padding: 9.4rem 0 10.8rem;

  img {
    margin-left: auto;
  }
`

export const Info = styled.div`
  max-width: 112rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  > div {
    /* width: 58.8rem; */
    display: flex;
    flex-direction: column;

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

    ul {
      width: 56.7rem;
      height: 8.4rem;
      margin-top: 6.6rem;
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 2rem 4rem;

      li {
        display: inline-flex;
        align-items: center;

        p {
          font-size: 1.6rem;
        }

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
    }
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
`
