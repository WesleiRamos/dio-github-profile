import RepositoryWrapper from './styles'

const RepositoryItem = (props: GithubRepository) => {
  return (
    <RepositoryWrapper>
      <h2>{props.full_name}</h2>
      <p>
        <span>Link: </span>
        <a
          href={props.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {props.full_name}
        </a> 
      </p>
    </RepositoryWrapper>
  )
}

export default RepositoryItem
