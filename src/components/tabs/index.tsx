import { useState } from 'react'
import * as Wrapper from './styles'

type Tab = {
  name: string,
  renderer: () => JSX.Element | JSX.Element[]
}

type TabsProps = {
  tabs: Tab[]
}

const Tabs = ({ tabs = [] }: TabsProps) => {
  const [ currentTab, setCurrentTab ] = useState(0)

  const handleTabClick = (index: number) => () =>{
    setCurrentTab(index)
  }

  const renderTab = (tab: Tab, index: number) => {
    const isActive = currentTab === index
    return (
      <Wrapper.Tab key={tab.name} className={isActive ? 'active' : ''} onClick={handleTabClick(index)}>
        {tab.name}
      </Wrapper.Tab>
    )
  }

  return (
    <Wrapper.Tabs>
      <Wrapper.TabList>
        {tabs.map(renderTab)}
      </Wrapper.TabList>

      <Wrapper.TabContent>
        {tabs[currentTab].renderer()}
      </Wrapper.TabContent>
    </Wrapper.Tabs>
  )
}

export default Tabs
 