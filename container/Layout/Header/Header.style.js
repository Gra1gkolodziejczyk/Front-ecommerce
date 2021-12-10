// aide toi beaucoup des docs et notamment de celle des styled-components
// elle te permettras de comprendre tout ce dont tu as besoin de comprendre
// sur les styled-components et l'étendue de leurs puissance.

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HeaderWrapper = styled.header`
  width: 100%;
  

  // img>svg.homepage--logo {
  //   fill: red;
  //   color: red;
  // }

  @media only screen and (max-width: 991px) {
    .navbar {
      display: none;
    }
    .transparent {
      .navbar_search {
        display: none;
      }
    }
  }
`;

export const MobileNavbar = styled.nav`
  display: none;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  width: 100%;
  @media only screen and (max-width: 990px) {
    display: flex;
  }

  &.default {
    border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
    background-color: ${themeGet('color.1', '#ffffff')};
  }

  .hamburg-btn {
    border: 0;
    padding: 0;
    width: auto;
    height: auto;
    background-color: transparent;

    > span {
      display: block;
      width: 35px;
      height: 5px;
      margin: 5px 0;
      border-radius: 5px;
      background-color: blue;
      transition: all 0.3s ease;
    }

    &:hover,
    &.active {
      background-color: transparent;

      > span {
        width: 35px;
        background-color: ${themeGet('primary.0', '#F9185B')};
      }
    }

    &::after {
      display: none;
    }
  }

  &.transparent {
    position: fixed;
    z-index: 9999;

    .hamburg-btn {
      > span {
        background-color: red;
      }
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
 

  > a {
    flex-shrink: 0;
    margin-right: 27px;

    @media only screen and (max-width: 480px) {
      margin-right: 20px;
    }

    img {
      height: auto;
      max-width: inherit;
    }
  }
`;

export const CloseDrawer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 15px 12px;

  > button {
    border: 0;
    padding: 0;
    background-color: transparent;
    font-size: 38px;
    line-height: 1;
    height: auto;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: ${themeGet('text.1', '#909090')};
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      outline: 0;
      color: ${themeGet('text.0', '#2C2C2C')};
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  padding: 25px 35px;
  padding-right: 15px;
  align-items: center;

  img {
    width: 60px ;
    height: 60px;
}


  
	
`;

export const AvatarImage = styled.div`
  flex-shrink: 0;
  margin-right: 15px;

  img {
    width: 65px;
    height: 65px;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const AvatarInfo = styled.div`
padding: 10px;
  h3 {
    color: grey;
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 5px;
  }

  a {
    color: blue;
    font-size: 1em;
    line-height: 1em;
    font-weight: 700;


    &:hover,
    &:focus {
      text-decoration: none;
      outline: 0;
      color: red;
    }
  }
`;

export const NavbarSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 480px) {
    padding-right: 15px;
    box-sizing: border-box;
  }

  input {
    font-size: 17px;
    font-weight: 700;
    padding-left: 20px;
    padding-right: 30px;
    color: ${themeGet('text.0', '#2C2C2C')};
    border-radius: 4px;
    border: 1px solid ${themeGet('border.0', '#EBEBEB')};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${themeGet('color.1', '#ffffff')};
    height: 48px;
    min-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.3s ease;

    @media only screen and (max-width: 1200px) {
      min-width: 320px;
    }

    @media only screen and (max-width: 480px) {
      min-width: calc(100% - 50px);
    }

    &::placeholder {
      color: rgb(72, 72, 72);
    }

    &:hover,
    &:focus {
      border-color: ${themeGet('border.0', '#EBEBEB')};
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
        0 4px 12px rgba(26, 26, 29, 0.08);
    }
  }

  > svg {
    position: absolute;
    z-index: 1;
    top: auto;

    &.map-marker {
      left: 14px;
      right: auto;
    }

    &.target {
      right: 10px;
      left: auto;

      @media only screen and (max-width: 480px) {
        right: 25px;
      }
    }
  }
`;

export default HeaderWrapper;