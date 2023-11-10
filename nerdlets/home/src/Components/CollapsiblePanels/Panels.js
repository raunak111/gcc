import React from 'react';;
import { Layout, CollapsibleLayoutItem, LayoutItem } from 'nr1';
import MapComp from '../MapComponents/MapComp';
import { Icon } from 'nr1';

export default function Panels() {
    return (
        <div>
            {/* <Layout style={{ height: '100vh' }}>
                <CollapsibleLayoutItem
                    triggerType={CollapsibleLayoutItem.TRIGGER_TYPE.INBUILT}
                    type={LayoutItem.TYPE.SPLIT_LEFT}
                    sizeType={LayoutItem.SIZE_TYPE.SMALL}
                // style={{ height: '100%' }}
                >
                    <div style={{ marginTop: '20%', height: '88%', display: 'flex', flexDirection: 'column', borderRight: '2px solid grey', borderTop: '8px solid grey' }}>
                        <div style={{ paddingLeft: "20px", fontSize: "16px" }}>Service Now</div>
                    </div>
                </CollapsibleLayoutItem>
            </Layout>
            <LayoutItem></LayoutItem>
    */}

            <Layout>
                <CollapsibleLayoutItem
                    triggerType={CollapsibleLayoutItem.TRIGGER_TYPE.INBUILT}
                    type={LayoutItem.TYPE.SPLIT_LEFT}
                    sizeType={LayoutItem.SIZE_TYPE.SMALL}
                    style={{borderRight:'2px solid grey', borderTop: '8px solid grey', borderBottom: '2px solid grey' }}
                >
                    <div>
                        <div style={{ paddingLeft: '20px', fontSize: '16px' }}>Service Now <Icon className='icon' type={Icon.TYPE.INTERFACE__INFO__INFO} /> </div>
                    </div>
                </CollapsibleLayoutItem>

                <LayoutItem>
                    <MapComp />
                </LayoutItem>

                <CollapsibleLayoutItem
                    triggerType={CollapsibleLayoutItem.TRIGGER_TYPE.INBUILT}
                    type={LayoutItem.TYPE.SPLIT_RIGHT}
                    sizeType={LayoutItem.SIZE_TYPE.SMALL}
                    style={{borderLeft:'2px solid grey', borderTop: '8px solid grey', borderBottom: '2px solid grey' }}
                >
                    <div>
                        <div style={{ paddingLeft: '20px', fontSize: '16px' }}>Active Alerts <Icon className='icon' type={Icon.TYPE.INTERFACE__INFO__INFO} /></div>
                    </div>
                </CollapsibleLayoutItem>
            </Layout>
        </div>

    )
}
