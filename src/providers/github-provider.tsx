// types.d.ts
import { createContext, useCallback, useState } from 'react'
import api from '../services/api'

const DEFAULT_STATE: GithubState = {
  hasUser: false,
  loading: false,
  user: {
    id: 0,
    avatar: '',
    login: '',
    name: '',
    bio: '',
    html_url: '',
    blog: '',
    company: '',
    location: '',
    followers: 0,
    following: 0,
    public_gists: 0,
    public_repos: 0,
  },
  repositories: [],
  starred: [],
}

export const GithubContext = createContext<GithubContextType>({
  githubState: DEFAULT_STATE,
  getUser: (username: string) => {},
  getStarred: (username: string) => {},
  getRepositories: (username: string) => {},
})

const GithubProvider = ({ children = [] }: GithubProviderProps) => {
  const [ githubState, setGithubState ] = useState<GithubState>(DEFAULT_STATE)

  const getUser = (username: string) => {
    setGithubState(previous => ({
      ...previous,
      loading: true
    }))

    api<GithubUser>(`/${username}`)
      .then((data: GithubUser) => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            bio: data.bio,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          }
        }))
      })
      .catch(() => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          hasUser: false,
        }))
      })
  }

  const getRepositories = (username: string) => {
    setGithubState(previous => ({
      ...previous,
      loading: true
    }))

    api<GithubRepository[]>(`/${username}/repos`)
      .then((data: GithubRepository[]) => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          repositories: data
        }))
      })
      .catch(() => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          repositories: [],
        }))
      })
  }

  const getStarred = (username: string) => {
    setGithubState(previous => ({
      ...previous,
      loading: true
    }))

    api<GithubRepository[]>(`/${username}/starred`)
      .then((data: GithubRepository[]) => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          starred: data
        }))
      })
      .catch(() => {
        setGithubState(previous => ({
          ...previous,
          loading: false,
          starred: [],
        }))
      })
  }

  const contextValue = {
    githubState,
    getUser: useCallback(getUser, []),
    getRepositories: useCallback(getRepositories, []),
    getStarred: useCallback(getStarred, []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
