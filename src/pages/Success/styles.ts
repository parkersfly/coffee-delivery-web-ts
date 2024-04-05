import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 112rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > div {
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
    margin-top: 18.4rem;
  }
`

export const Card = styled.div`
  max-width: 52.6rem;
  height: 27rem;
  border-radius: 0.6rem 3.6rem;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 4rem;

  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;

  .info {
    display: flex;
    color: ${({ theme }) => theme['base-text']};
  }
`
