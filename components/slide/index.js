import React from 'react'
import styled, {keyframes} from 'styled-components'
import  * as ReactAnimations  from 'react-animations'

import animations from './animations'
const animation =  animations[Math.floor(Math.random()*animations.length)]
const selectedAnimation = keyframes`${ReactAnimations[animation]}`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    animation: 1s ${selectedAnimation};
`

export default Slide