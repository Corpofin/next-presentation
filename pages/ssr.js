import React, {Component} from 'react'
import styled from 'styled-components'
import Router from 'next/router'

require('isomorphic-fetch')

import Slide from '@components/slide'
import CustomLink from  '@components/link'
import Image from '@components/img'

export default class Index extends Component{
    static async getInitialProps(){
        const res = await fetch('https://api.punkapi.com/v2/beers')
        if(res.ok){
            const beers = await res.json()
            return {beers}
        }else{
            return {
                beers : []
            }
        }
    }
    constructor(props){
        super(props)
        console.log(props)
        this.state = {}
    }
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
            <p>Example: <span>isomorphic-fetch</span></p>
        </Slide>
    }
}