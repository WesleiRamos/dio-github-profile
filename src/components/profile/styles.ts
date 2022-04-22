import styled from 'styled-components'

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 30px;
  border: 1px solid var(--border-color);
`

export const GenericInfo = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 1em;
  }
  
  & > * {
    display: inline;
  }
`

export const UserInfo = styled.div`
  flex: 1;
  
  h1 {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  & > p {
    margin-bottom: 20px;
  }
`

export const Profile = styled.div`
  display: flex;
  width: 60vw;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
  padding-top: 30px;
`
