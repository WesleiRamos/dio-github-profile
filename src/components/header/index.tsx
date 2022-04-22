import { useState } from 'react'
import HeaderWrapper from './styles'
import useGithub from '../../hooks/github-hooks'

const Header = () => {
  const { getUser } = useGithub()
  const [ username, setUsername ] = useState<string>('')

  const searchUser = () => {
    if (!username)
      return

    getUser(username)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value.trim())
  }

  return (
    <HeaderWrapper>
      <input
        type="text"
        placeholder="Insira o usuário"
        onChange={onInputChange}
        onKeyUp={(event) => event.code === 'Enter' && searchUser()}
      />

      <button onClick={searchUser}>
        Buscar
      </button>
    </HeaderWrapper>
  )
}

export default Header
