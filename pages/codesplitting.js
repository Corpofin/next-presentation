import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '../utils/keyboard'

import Slide from '../components/slide'
import CustomLink from  '../components/link'
import Image from '../components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/ssr'
        window.nextSlide = '/prefetching'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/prefetching'></CustomLink>
            <CustomLink type="prev" href='/ssr'></CustomLink>
            <h1>Automatic code splitting ⛏</h1>
            <p>Let's open the console and find out what is loaded by Nextjs</p>
        </Slide>
    }
}