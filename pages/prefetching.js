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
            <CustomLink type="next" href='/staticexports'></CustomLink>
            <CustomLink type="prev" href='/codesplitting'></CustomLink>
            <h1>Prefetching 💉</h1>
        </Slide>
    }
}