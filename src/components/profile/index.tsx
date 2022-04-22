import * as Wrapper from './styles'
import StatsCount from '../stats-count'
import useGithub from '../../hooks/github-hooks'

const Profile = () => {
  const { githubState } = useGithub()

  return (
    <Wrapper.Profile>
      <Wrapper.Avatar src={githubState.user?.avatar} />
      <Wrapper.UserInfo>
        <h1>{githubState.user?.name}</h1>
        <p>{githubState.user?.bio}</p>
        <Wrapper.GenericInfo>
          <h3>Username: </h3>
          <a
            href={githubState.user?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            { githubState.user?.login }
          </a>
        </Wrapper.GenericInfo>

        { githubState.user?.company && (
            <Wrapper.GenericInfo>
              <h3>Company: </h3>
              <p>{githubState.user?.company}</p>
            </Wrapper.GenericInfo>
          )
        }

        <Wrapper.GenericInfo>
          <h3>Location: </h3>
          <p>{githubState.user?.location}</p>
        </Wrapper.GenericInfo>

        { githubState.user?.blog && (
            <Wrapper.GenericInfo>
              <h3>Blog: </h3>
              <a
                href={githubState.user?.blog}
                target="_blank"
                rel="noreferrer"
              >
                { githubState.user?.blog }
              </a>
            </Wrapper.GenericInfo>
          )
        }

        <StatsCount />
      </Wrapper.UserInfo>
    </Wrapper.Profile>
  )
}

export default Profile
