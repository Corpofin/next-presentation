import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: ${props => (props.type === "big" ? "700px" : "300px")};
`;

export default Image;
