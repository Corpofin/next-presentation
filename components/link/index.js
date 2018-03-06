import React,{Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
    color: black;
    position:absolute;
    top:3px;
    text-transform: capitalize;
    cursor: pointer;
    ${props=> props.type === 'next' ? 'right:3px':'left:3px'};
`;

export default class CustomLink extends Component{
    render(){
        return <Link href={this.props.href}>
            <StyledLink type={this.props.type}>{this.props.type}</StyledLink>
        </Link>
    }
}