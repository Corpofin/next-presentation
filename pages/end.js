import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import initializeKeyboard from '@utils/keyboard'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/customserver'
        window.nextSlide = undefined
    }
    render(){
        return <Slide>
            <CustomLink type="prev" href='/prefetching'></CustomLink>
            <marquee>
                <h1>The end</h1>
            </marquee>
            <p>Twitter:  <Link href="https://twitter.com/ricanella92"><a target="_blank">@ricanella92</a></Link></p>
            <p>Github: <Link href="https://github.com/thecreazy/next-presentation.git"><a target="_blank">https://github.com/thecreazy/next-presentation.git</a></Link> </p>
        </Slide>
    }
}