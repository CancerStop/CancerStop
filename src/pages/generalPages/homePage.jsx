import React from 'react';
import Button from '@material-ui/core/Button';

import SelectCancerMenu from '../../components/selectCancerMenu/selectCancerMenu';

export default function HomePage() {
    return (
        <div className="homePage">
            <h1 className='homePage_introSentence'>A quick reference guide to different types of cancers</h1>
            <div style={{ marginTop: 10 }}>
                <SelectCancerMenu />
            </div>
            {/* <div className="homePage_mobileAppAdd">
                <h2>Download our free mobile app</h2>
                <a
                    href="https://play.google.com/store/apps/details?id=com.sequilabs.cancerstop"
                    target="_blank"
                >
                    <Button
                        style={{
                            marginTop: 20,
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Download
                    </Button>
                </a>
            </div> */}
        </div>
    )
}
