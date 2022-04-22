import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --border-color: rgb(210, 210, 210);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, a:visited {
    color: #1a9ff6;
  }
`

export default GlobalStyles
