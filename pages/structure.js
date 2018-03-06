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
            <CustomLink type="next" href='/'></CustomLink>
            <CustomLink type="prev" href='/start'></CustomLink>
            <h1>Structure</h1>
            
        </Slide>
    }
}