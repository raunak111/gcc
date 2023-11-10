import React from 'react'
import { Icon } from 'nr1';
import '../../Styles/Header.css';
import {Link} from 'nr1';

export default function Header() {
  return (
    <div style={{marginBottom:'2%'}}>
      <ul className='main'>
        <li className='list'> <Icon className='header-green icon-size' type={Icon.TYPE.LOCATION__LOCATION__WORLD} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-yellow icon-size' type={Icon.TYPE.LOCATION__LOCATION__WORLD} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-red icon-size' type={Icon.TYPE.LOCATION__LOCATION__WORLD} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-grey icon-size' type={Icon.TYPE.LOCATION__LOCATION__WORLD} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-green icon-size' type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__SERVER} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-yellow icon-size' type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__SERVER} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-red icon-size' type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__SERVER} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-grey icon-size' type={Icon.TYPE.HARDWARE_AND_SOFTWARE__HARDWARE__SERVER} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-green icon-size' type={Icon.TYPE.DATAVIZ__DATAVIZ__SERVICE_MAP_CHART} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-yellow icon-size' type={Icon.TYPE.DATAVIZ__DATAVIZ__SERVICE_MAP_CHART} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-red icon-size' type={Icon.TYPE.DATAVIZ__DATAVIZ__SERVICE_MAP_CHART} />
          <div>10</div>
        </li>
        <li className='list'> <Icon className='header-grey icon-size' type={Icon.TYPE.DATAVIZ__DATAVIZ__SERVICE_MAP_CHART} />
          <div>10</div>
        </li>

      </ul>
    </div>
  )
}
