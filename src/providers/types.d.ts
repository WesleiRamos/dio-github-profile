type GithubProviderProps = {
  children?: JSX.Element | JSX.Element[]
}

type GithubRepository = {
  id: number;
  name: string;
  html_url: string;
  full_name: string;
}

type GithubUser = {
  id: number;
  avatar?: string;
  avatar_url?: string;
  login: string;
  name: string;
  bio: string;
  html_url: string;
  blog: string;
  company: string;
  location: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
}

type GithubState = {
  hasUser: boolean;
  loading: boolean;
  user?: GithubUser;
  repositories: IRepository[];
  starred: IRepository[];
}

type GithubContextType = {
  githubState: GithubState;
  getUser: (username: string) => void;
  getRepositories: (username: string) => void;
  getStarred: (username: string) => void;
}