import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import initializeKeyboard from '@utils/keyboard'

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = '/staticexports'
        window.nextSlide = '/end'
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/end'></CustomLink>
            <CustomLink type="prev" href='/staticexports'></CustomLink>
            <h1>Use of a custom server 🤹🏻</h1>
            <h2>Nextjs allows you to extend the base functionality with your prefer nodejs framework</h2>
            <p><Link href="https://github.com/zeit/next.js/tree/master/examples/custom-server-express"><a target="_blank">See the example</a></Link></p>
        </Slide>
    }
}