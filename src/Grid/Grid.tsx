import React from 'react'
import { JsxEmit } from 'typescript'

import {Wrapper, Content} from './Grid.styles'

//getting interfaces
import { GridProps } from '../types'

const Grid = ({header, children} : GridProps) : JSX.Element => {

    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}

export default Grid;