import App from './App'
import GlobalStyles from './global/style'
import GithubProvider from './providers/github-provider'

const Provider = (): JSX.Element => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyles />
        <App />
      </GithubProvider>
    </main>
  )
}

export default Provider

