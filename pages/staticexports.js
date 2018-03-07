import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '../utils/keyboard'

import Slide from '../components/slide'
import CustomLink from  '../components/link'
import Image from '../components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/prefetching'
        window.nextSlide = '/end'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/end'></CustomLink>
            <CustomLink type="prev" href='/prefetching'></CustomLink>
            <h1>Static exports 📦</h1>
        </Slide>
    }
}