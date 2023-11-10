import React from 'react'
import Clock from './Clock';
import '../../Styles/Clock.css';
import timeZoneCountryWise from './timezone_countrywise.json';

export default function ClockComp() {
    return (
        <div style={{paddingLeft:'25%'}}>
            <ul className='list'>
                <Clock title="Puerto Rico" zone="America/Puerto_Rico" />
                <Clock title="Dublin" zone="Europe/Dublin" />
                <Clock title="Berlin" zone="Europe/Berlin" />
                <Clock title="Chennai" zone="Asia/Kolkata" />
                <Clock title="Manila" zone="Asia/Manila" />
                <Clock title="UTC" zone="UTC" />
                {/* {timeZoneCountryWise.map((c, id) => {
                    return (
                        <Clock title={c.name} zone={c.timezone} />
                    )
                })} */}
            </ul>
        </div>
    )
}
