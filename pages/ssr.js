import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import initializeKeyboard from '@utils/keyboard'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/hotreload'
        window.nextSlide = '/codesplitting'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/codesplitting'></CustomLink>
            <CustomLink type="prev" href='/hotreload'></CustomLink>
            <h1>Server rendering 👨‍💻</h1>
            <ol>
                <li>Helps us to improve our websites' seo</li>
                <li>Forces us to ensure that everything is manageable on the backend side</li>
            </ol>
        </Slide>
    }
}