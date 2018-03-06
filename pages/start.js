import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import Slide from '../components/slide'
import CustomLink from  '../components/link'
import Image from '../components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/two'
        window.nextSlide = '/three'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/structure'></CustomLink>
            <CustomLink type="prev" href='/two'></CustomLink>
            <h1>Start with Nextjs it's very simple</h1>
            <ol>
                <li>$ mkdir next-presentation</li>
                <li>$ cd next-presentation</li>
                <li>$ npm init</li>
                <li>$ yarn add next react react-dom</li>
                <li>populate <span>./pages/index.js</span> with <span>export default () => <component>Welcome to next.js!</component> </span></li>
                <li>$ next</li>
                <li>go to <span>http://localhost:3000</span></li>
            </ol>
        </Slide>
    }
}