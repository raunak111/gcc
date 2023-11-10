import React, { useState } from 'react';
import { Card, CardBody, Grid, GridItem, CardHeader, TextField, Link } from 'nr1';
import '../../Styles/CardComp.css'
import { Tooltip} from 'nr1'


export default function CardComp() {

    const [filterValue, setFilterValue] = useState("");
    const cardItem = [
        {
            "title": "Hardware Led Quoting:",
            "cardBody": [
                { "term": "Quotes Per Hour:", "data": "2K/33K" },
                { "term": "Unique Users:", "data": "6K" },
                { "term": "Save/Update Quotes:", "data": "12.03%" },
                { "term": "Pricing Calls:", "data": "1K" },
                { "term": "Active Alerts:", "data": "2" }
            ]
        }, {
            "title": "Eclipse Tier 1 App",
            "cardBody": [
                { "term": "Pricing Calls:", "data": "5K/5K" },
                { "term": "Response Time:", "data": "6.7 sec" },
                { "term": "DB IO:", "data": "78%" },
                { "term": "Active Alerts:", "data": "1" }
            ]
        },
        {
            "title": "User Journey 2:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "24K" },
                { "term": "Golden Metric:", "data": "313k" },
                { "term": "Golden Metric:", "data": "12.03%" },
                { "term": "Golden Metric:", "data": "1K" },
                { "term": "Active Alerts:", "data": "0" }
            ]
        },
        {
            "title": "User Journey 3:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "null" },
                { "term": "Golden Metric:", "data": "null" },
                { "term": "Golden Metric:", "data": "null" },
                { "term": "Golden Metric:", "data": "null" },
                { "term": "Active Alerts:", "data": "null" }
            ]
        },
        {
            "title": "User Journey 4:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "24K" },
                { "term": "Golden Metric:", "data": "313k" },
                { "term": "Golden Metric:", "data": "12.03%" },
                { "term": "Golden Metric:", "data": "1K" },
                { "term": "Active Alerts:", "data": "0" }
            ]
        },
        {
            "title": "Tire 1 App 2:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "24K" },
                { "term": "Golden Metric:", "data": "313k" },
                { "term": "Golden Metric:", "data": "12.03%" },
                { "term": "Golden Metric:", "data": "1K" },
                { "term": "Active Alerts:", "data": "0" }
            ]
        },
        {
            "title": "Tire 1 App 3:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "24K" },
                { "term": "Golden Metric:", "data": "313k" },
                { "term": "Golden Metric:", "data": "12.03%" },
                { "term": "Golden Metric:", "data": "1K" },
                { "term": "Active Alerts:", "data": "0" }
            ]
        },
        {
            "title": "Tire 1 App 4:",
            "cardBody": [
                { "term": "Golden Metric:", "data": "24K" },
                { "term": "Golden Metric:", "data": "313k" },
                { "term": "Golden Metric:", "data": "12.03%" },
                { "term": "Golden Metric:", "data": "1K" },
                { "term": "Active Alerts:", "data": "0" }
            ]
        }

    ]

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value)
    };

    const sla = "SLA's Information";
    return (
        <div>
            <TextField type="text" placeholder="Filter"
                onChange={(e) => handleFilterChange(e)}
                style={{ width: "40%", border: "2px solid black"}}
            />


            <Grid style={{ marginTop: "50px" }}>
                {cardItem.filter(card => card.title.toLowerCase().includes(filterValue.toLowerCase())).sort((a, b) => {
                    const a1 = parseInt(a.cardBody[a.cardBody.length - 1].data);
                    const b1 = parseInt(b.cardBody[b.cardBody.length - 1].data);
                    // return b1 - a1;

                    if (isNaN(a1) && !isNaN(b1)) {
                        return 1;
                    } else if (!isNaN(a1) && isNaN(b1)) {
                        return -1;
                    } else if (isNaN(a1) && isNaN(b1)) {
                        return 0;
                    } else {
                        return b1 - a1;
                    }
                }).map((card) => (
                    <GridItem columnSpan={3} className='card-container'>
                        <Card>
                            {card.cardBody.data}
                            {/* <CardHeader title={card.title} className="card-header-container" /> */}
                            {/* Can use link tag from nr1 to hyperlink cardheader */}
                            {/* https://one.newrelic.com/nr1-core/workloads/detail/{workload entityGuid} */}
                            <Link style={{ textDecoration: 'none' }} to='https://one.newrelic.com/nr1-core/workloads/detail/NDEwMzg2NHxOUjF8V09SS0xPQUR8MTgxNDc1'><CardHeader title={card.title} className={(parseInt(card.cardBody[card.cardBody.length - 1].data)) >= 2 ? 'card-header-container-red' : (parseInt(card.cardBody[card.cardBody.length - 1].data)) == 0 ? 'card-header-container-green' : (parseInt(card.cardBody[card.cardBody.length - 1].data)) == 1 ? 'card-header-container-yellow' : 'card-header-container-grey'} /></Link>
                            <CardBody>
                                <ul>
                                    {
                                        card.cardBody.map((item, key) => {
                                            return <li className='card-body-list' key={key}><Tooltip text={sla}><span>{item.term}</span></Tooltip> <span>{item.data}</span></li>
                                        })
                                    }
                                </ul>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>



            {/* <Grid>
                    {this.cardItem.map((item, idx) => (
                        <GridItem columnSpan={3}>
                            <div className="nr1-RedBox">
                                <Card>
                                    <CardHeader title={item.title} />
                                    <CardBody>
                                        {item.body}
                                    </CardBody>
                                </Card>
                            </div>
                        </GridItem>
                    ))}
                </Grid> */}


        </div>
    )
}
