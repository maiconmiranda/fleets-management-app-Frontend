import styled from "styled-components";
import { Link } from "react-router-dom";

// footer links
export const LinkX = styled(Link)`
  margin: 0 40px;
  text-decoration: none;
  color: white;
`;

// footer logo
export const SmallLogo = styled.div`
  display: inline-block;
  font-size: 1.3rem;
`;
// footer content
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text_decoration: none;
  text-align: center;
`;
// footer wrap
export const AppFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;
  background-color: #1F718F;
`;

export const Allrights = styled.div`
color: white;
`