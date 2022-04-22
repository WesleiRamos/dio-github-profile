import Layout from './components/layout'
import NoUser from './components/no-user'
import Profile from './components/profile'
import useGithub from './hooks/github-hooks'
import Repositories from './components/repositories'

const App = (): JSX.Element => {
  const { githubState } = useGithub()

  const renderUserProfile = (): JSX.Element => {
    if (!githubState.hasUser)
      return <NoUser />

    if (githubState.loading)
      return <p>Loading...</p>

    return (
      <>
        <Profile />
        <Repositories />
      </>
    )
  }

  return (
    <Layout>
      {renderUserProfile()}
    </Layout>
  )
}

export default App

