import { useContext } from 'react'
import { GithubContext } from '../providers/github-provider'

const useGithub = () =>
  useContext(GithubContext)

export default useGithub
