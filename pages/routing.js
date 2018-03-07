import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '../utils/keyboard'

import Slide from '../components/slide'
import CustomLink from  '../components/link'
import Image from '../components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/gift'
        window.nextSlide = '/ecosystem'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/ecosystem'></CustomLink>
            <CustomLink type="prev" href='/gift'></CustomLink>
            <h1>Automatic routing 🚏</h1>
            <ol>
                <li>By default every file <span>.js</span> inside the page folder is a route</li>
                <li>Every route called and not registered will be catch in a 404 page</li>
                <li>Possibility to Route Masking </li>
            </ol>
            <Image src="/static/img/routing.png" type="big" />
        </Slide>
    }
}