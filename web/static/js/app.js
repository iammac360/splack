import React from 'react'
import {render} from 'react-dom'
import {RootContainer, SidebarContainer, ChatBodyContainer} from './containers'

render(
  <RootContainer>
    <div className="flex-container flex-full-height">
      <SidebarContainer />
      <ChatBodyContainer />
    </div>
  </RootContainer>,
  document.getElementById('root')
)
