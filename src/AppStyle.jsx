import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
  filter: invert(1);
  width: 80px;
  padding: 15px;
  }

  h1 {
    transition: 0.3s;
  }

  h1:hover {
    color: rgb(0, 184, 0);
    border-bottom: 2px solid rgb(0, 184, 0);
    cursor: default;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  ul li {
    margin: 0 30px;
    transition: .2s;
  }

  ul li a{
    text-decoration: none;
  }

  ul li:hover{
    transform: scale(1.4);
  }

  @media screen and (max-width:768px) {
      h1 {
        font-size: 10px;
      }
  }
`