import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '@utils/keyboard'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/prefetching'
        window.nextSlide = '/customserver'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/customserver'></CustomLink>
            <CustomLink type="prev" href='/prefetching'></CustomLink>
            <h1>Static exports 📦</h1>
            <h2>Nextjs allows you to export everything we have done in static files. to do this:</h2>
            <ol>
                <li>Declare in your <span>next.config.js</span> the path to export</li>
                <li>$ <span>next build && next export</span></li>
            </ol>
            <Image src="/static/img/export.png" type="big" /> 
        </Slide>
    }
}