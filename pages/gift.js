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
            <CustomLink type="next" href='/routing'></CustomLink>
            <CustomLink type="prev" href='/start'></CustomLink>
            <h1>But what Nextjs do for us?</h1>
            <ol>
                <li>Automatic routing 🚏</li>
                <li>Ecosystem compatibility ⚛️</li>
                <li>Hot Code Reloading 🔥</li>
                <li>Server rendering 👨‍💻</li>
                <li>Automatic code splitting ⛏</li>
                <li>Prefetching 💉</li>
                <li>Static exports 📦</li>
            </ol>
        </Slide>
    }
}