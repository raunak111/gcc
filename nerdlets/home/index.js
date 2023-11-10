// import React from 'react';

// // https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class HomeNerdlet extends React.Component {
//   render() {
//     return <h1>Hello, home Nerdlet!</h1>;
//   }
// }

import React from 'react';
import ClockComp from './src/Components/ClockComponents/ClockComp';
import MapComp from './src/Components/MapComponents/MapComp';
import CardComp from './src/Components/CardComponents/CardComp';
import Header from './src/Components/Headers/Header';
import DashOne from './src/DashboadOne/DashOne';
//import Trail from './Trail';
import LeftPanel from './src/Components/CollapsiblePanels/Panels';
import RightPanel from './src/Components/CollapsiblePanels/RightPanel';
//import NQRLComp from './NQRLComp';


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <>


        {/* <Header/> */}
        {/* <MapComp/> */}
        {/* <LeftPanel/> */}
        {/* <RightPanel/> */}
        <DashOne/> 
        {/* <CardComp/> */}
        {/* <NQRLComp/> */}
        {/* <Trail/> */}
        {/* <ClockComp/> */}
      </>
    );
  }
}