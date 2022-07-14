import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 70vw;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  span:first-child {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
  }

  strong {
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }
`
