import styled from 'styled-components'

export const ContainerBtnScroll = styled.i`
  div {
    width: 1.1rem;
    height: 1.7rem;
    border: solid 2px ${props => props.theme['magenta']};
    border-radius: 8px;

    position: relative;

    &::after {
      content: '';
      background: ${props => props.theme['magenta']};
      width: 0.2rem;
      height: 0.5rem;
      border-radius: 3px;

      position: absolute;
      bottom: 0.3rem;
      left: 0;
      right: 0;
      margin: 0 auto;

      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
        alternate-reverse both;
    }

    @keyframes slide-top {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-7px);
      }
    }
  }
`
