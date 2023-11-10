import React from 'react'
import Header from '../Components/Headers/Header'
import ClockComp from '../Components/ClockComponents/ClockComp'
import Panels from '../Components/CollapsiblePanels/Panels'

export default function DashOne() {
  return (
    <div>
      <Header/>
      <Panels/>
      <ClockComp/>
    </div>
  )
}
