import React from 'react';
import { Layout, CollapsibleLayoutItem, LayoutItem } from 'nr1';

export default function RightPanel() {
    return (
        <div>
            <Layout style={{ height: '100vh' }}>
                <LayoutItem>
                </LayoutItem>
                <CollapsibleLayoutItem
                    triggerType={CollapsibleLayoutItem.TRIGGER_TYPE.INBUILT}
                    type={LayoutItem.TYPE.SPLIT_RIGHT}
                >
                    <div style={{ marginTop: '20%', height: '88%', display: 'flex', borderLeft: '2px solid grey', flexDirection: 'column', borderTop: '8px solid grey' }}>
                        <div style={{ paddingLeft: '20px', fontSize: '16px' }}>Active Alerts</div>
                    </div>
                </CollapsibleLayoutItem>
            </Layout>
        </div>
    )
}
