import React, {Component} from 'react'
import styled from 'styled-components'

import Slide from '../components/slide'
import CustomLink from  '../components/link'


export default class Index extends Component{
    render(){
        return <Slide>
            <CustomLink type="next" href='/two'></CustomLink>
            <h1>Slide1</h1>
        </Slide>
    }
}