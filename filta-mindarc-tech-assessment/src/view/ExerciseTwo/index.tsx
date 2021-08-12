import React, { ReactElement } from 'react'
import Accordian from './Accordion'
import Tabs from './Tabs'

import data from "../../data/data.json";

interface Props {
    
}

function ExTwo({}: Props): ReactElement {
    return (
        <div className='h-100'>
            <Accordian data={data}/>
            <Tabs data={data}/>
        </div>
    )
}

export default ExTwo
