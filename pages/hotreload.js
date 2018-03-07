import React, { Component } from "react";
import styled from "styled-components";
import Router from "next/router";

import Slide from "@components/slide";
import CustomLink from "@components/link";
import Image from "@components/img";

export default class Index extends Component {
  componentDidMount() {
    window.prevSlide = "/ecosystem";
    window.nextSlide = "/ssr";
  }
  render() {
    return (
      <Slide>
        <CustomLink type="next" href="/ssr" />
        <CustomLink type="prev" href="/ecosystem" />
        <h1>Hot Code Reloading 🔥</h1>
        <p>By default nextjs enables hot reload</p>
      </Slide>
    );
  }
}
