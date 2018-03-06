import React, {Component} from 'react'
import styled from 'styled-components'

import Slide from '../components/slide'
import CustomLink from  '../components/link'

export default class Index extends Component{
    render(){
        return <Slide>
            <CustomLink type="next" href='/three'></CustomLink>
            <CustomLink type="prev" href='/'></CustomLink>
            <h1>Slide2</h1>
        </Slide>
    }
}