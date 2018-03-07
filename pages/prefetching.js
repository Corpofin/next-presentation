import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '@utils/keyboard'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/codesplitting'
        window.nextSlide = '/staticexports'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/staticexports'></CustomLink>
            <CustomLink type="prev" href='/codesplitting'></CustomLink>
            <h1>Prefetching 💉</h1>
            <h2>Nextjs allows us to optimize the display speed of the pages allowing us to prefetch it</h2>
            <p>To do this we just need to add the <span>prefetch</span> props to our <span>Link</span></p>
            <Image src="/static/img/prefetch.png" type="big" />
        </Slide>
    }
}