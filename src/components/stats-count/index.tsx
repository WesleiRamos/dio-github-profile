import StatsCountWrapper from './styles'
import useGithub from '../../hooks/github-hooks'

const StatsCount = () => {
  const { githubState } = useGithub()

  return (
    <StatsCountWrapper>
      <div>
        <h4>Followers</h4>
        <span>{githubState.user?.followers}</span>
      </div>

      <div>
        <h4>Following</h4>
        <span>{githubState.user?.following}</span>
      </div>

      <div>
        <h4>Gists</h4>
        <span>{githubState.user?.public_gists}</span>
      </div>

      <div>
        <h4>Repos</h4>
        <span>{githubState.user?.public_repos}</span>
      </div>
    </StatsCountWrapper>
  )
}

export default StatsCount
