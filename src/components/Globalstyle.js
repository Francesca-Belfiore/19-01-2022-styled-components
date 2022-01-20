import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s ease;
    
    article {
      h1 {
        color: ${({ theme }) => theme.link};
      }
    }

    a {
      color: ${({ theme }) => theme.link};

      &:active {
        color: ${({ theme }) => theme.link};
      }
    }
  }
`