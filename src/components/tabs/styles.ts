import styled from 'styled-components'

export const Tab = styled.div`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 10px;
  transition: .4s;
  border: 1px solid var(--border-color);

  &.active {
    background-color: rgb(240, 240, 240);
  }
`

export const TabList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 10px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`

export const TabContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`

export const Tabs = styled.div`
  padding: 20px;
`