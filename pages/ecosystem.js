import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

import initializeKeyboard from '@utils/keyboard'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/routing'
        window.nextSlide = '/hotreload'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/hotreload'></CustomLink>
            <CustomLink type="prev" href='/routing'></CustomLink>
            <h1>Ecosystem compatibility ⚛️</h1>
            <h3>Nextjs is compatible with the whole react and npm ecosystem</h3>
            <p>let's look at how you can integrate a react library or extend the webpack configuration</p>
        </Slide>
    }
}