import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  > img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
  }

  > div {
    margin: 0 5rem 0 2rem;

    > span {
      display: block;
      margin-bottom: 8px;
    }
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  > span:last-child {
    font-weight: bold;
  }
`
export const OptionsGroup = styled.div`
  display: flex;
  gap: 8px;

  > div,
  button:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 3.2rem;
    padding: 8px;
    border-radius: 6px;
    border: none;
    background-color: ${({ theme }) => theme['base-button']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button:last-child {
    font-size: 1.2rem;
    color: ${({ theme }) => theme['base-text']};
  }
`
