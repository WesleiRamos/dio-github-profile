import styled from 'styled-components'

export default styled.header`
  display: flex;
  padding: 10px;
  gap: 5px;
  align-items: center;
  border-bottom: 1px solid var(--border-color);

  input {
    flex: 1;
    outline: none;
    border: 1px solid var(--border-color);
    border-radius: 3px;
    padding: 5px 10px;
  }

  input:focus {
    box-shadow: 0 1px 5px var(--border-color);
  }

  button {
    color: white;
    padding: 6px 20px;
    border: none;
    border-radius: 3px;
    background-color: #1a9ff6;
  }
`
