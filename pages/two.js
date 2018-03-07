import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '../utils/keyboard'

import Slide from '../components/slide'
import CustomLink from  '../components/link'
import Image from '../components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/'
        window.nextSlide = '/start'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/start'></CustomLink>
            <CustomLink type="prev" href='/'></CustomLink>
            <Image src="/static/img/zeit.png" />
            <h1>Next.js is a minimalistic framework for server-rendered React applications.</h1>
            <h3>The goal of Nextjs is to simplify and speed up the creation of frontends without neglecting performance and SEO</h3>
        </Slide>
    }
}