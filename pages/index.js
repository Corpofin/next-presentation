import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import Slide from '../components/slide'
import Image from '../components/img'
import CustomLink from  '../components/link'


export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = ''
        window.nextSlide = '/two'
        setTimeout(()=>{
            document.addEventListener("keydown", (e) => {
                e.stopPropagation()
                e.preventDefault()
                if(e.keyCode === 37){
                    Router.push(window.prevSlide, window.prevSlide, { shallow: true })
                }
                if(e.keyCode === 39){
                    Router.push(window.nextSlide, window.nextSlide, { shallow: true })
                }
            });
        },500)
    }
    render(){
        return <Slide>
            <CustomLink type="next" href='/two'></CustomLink>
            <Image src="/static/img/next.png" />
            <h1>Server side rendering made simple</h1>
        </Slide>
    }
}