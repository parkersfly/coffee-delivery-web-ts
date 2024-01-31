import styled from 'styled-components'

export const HeaderContent = styled.header`
  height: 10.4rem;
  padding: 3.2rem 16rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`

export const Location = styled.div`
  height: 3.8rem;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  font-size: 1.4rem;

  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const Cart = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  line-height: 0;
  cursor: pointer;
  position: relative;

  /* span {
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    font-size: 1.2rem;
    font-weight: 700;

    position: absolute;
    top: -8px;
    right: -8.345px;

    background: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
  } */
`
