import Tabs from '../tabs'
import RepositoriesWrapper from './styles'
import { useState, useEffect } from 'react'
import RepositoryItem from '../repository-item'
import useGithub from '../../hooks/github-hooks'

const renderRepositoryItem = (repository: GithubRepository) => (
  <RepositoryItem key={repository.id} {...repository} />
)

const RendererRepositories = () => {
  const { githubState } = useGithub()
  return (
    <>
      {githubState.repositories.map(renderRepositoryItem)}
    </>
  )
}

const RendererStarred = () => {
  const { githubState } = useGithub()
  return (
    <>
      {githubState.starred.map(renderRepositoryItem)}
    </>
  )
}

const tabs = [
  { name: 'Repositories', renderer: RendererRepositories },
  { name: 'Starred', renderer: RendererStarred }
]

const Repositories = () => {
  const { githubState, getRepositories, getStarred } = useGithub()
  const [ canSearchRepositories, setCanSearchRepositories ] = useState(false)

  useEffect(() => {
    if (githubState.user?.login) {
      getRepositories(githubState.user.login)
      getStarred(githubState.user.login)
      setCanSearchRepositories(true)
    }
  }, [ githubState.user?.login ])

  const renderTabs = (): JSX.Element => {
    if (canSearchRepositories)
      return <Tabs tabs={tabs} />

    return <></>
  }

  return (
    <RepositoriesWrapper>
      {renderTabs()}
    </RepositoriesWrapper>
  )
}

export default Repositories
 