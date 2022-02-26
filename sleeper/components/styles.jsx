import styled from "styled-components";

export const StyledHeader = styled.header`
  display: block;
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid white;

  a img{
    width: 60px;
    filter: invert(1);
    position: absolute;
    left: 10px  ;
    top: 10px;
    transition: .1s linear;
  }

  a:hover img{
    left: 0px;
  }
`

export const StyledTimerBox = styled.main`
  section{
    width: 300px;
    height: 500px;
    border: 3px solid white;
    border-radius: 6px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .growingBall{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  @keyframes inhale {
    from {
      background-color: blue;
      transform: scale(1);
    }
    to {
      background-color: purple;
      transform: scale(2);
    }
  }

  @keyframes exhale {
    from {
      background-color: purple;
      transform: scale(2);
    }
    to {
      background-color: blue;
      transform: scale(1);
    }
  }

  .buttonsDiv {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .btn{
    margin: 0 5px;
    padding: 15px 20px;
    background-color: #7baeff;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    transition: .05s;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #5294fd;
  }

  .btn:active {
    transform: scale(.95);
  }

`