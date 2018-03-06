import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import Slide from '../components/slide'
import CustomLink from  '../components/link'


export default class Index extends Component{
    componentDidMount(){
        window.prevSlide = ''
        window.nextSlide = '/two'
        setTimeout(()=>{
            document.addEventListener("keydown", function (e) {
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
            <h1>Slide1</h1>
        </Slide>
    }
}