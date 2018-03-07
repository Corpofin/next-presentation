import React, { Component } from "react";
import styled from "styled-components";

import Slide from "@components/slide";
import Image from "@components/img";
import CustomLink from "@components/link";

export default class Index extends Component {
  componentDidMount() {
    window.prevSlide = undefined;
    window.nextSlide = "/two";
  }
  render() {
    return (
      <Slide>
        <CustomLink type="next" href="/two" />
        <Image src="/static/img/next.png" />
        <h1>Server side rendering made simple</h1>
      </Slide>
    );
  }
}
