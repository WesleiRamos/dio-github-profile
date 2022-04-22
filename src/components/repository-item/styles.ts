import styled from 'styled-components'

export default styled.div`
  border: 1px solid var(--border-color);
  padding: 10px;
  width: max-content;
  height: max-content;
  border-radius: 5px;

  & > * {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 1em;
    margin-bottom: 5px;
  }

  span, a {
    font-size: 0.8em;
  }
`
