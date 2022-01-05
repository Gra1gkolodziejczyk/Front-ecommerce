import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { RED, DARK_BLUE, GREY, BLUE, DARK_GREY } from '../../settings/colors';

const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  min-height: 82px;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);

    li{
      list-style-type: none;
      background-color: transparent;
    }

    a{
      text-decoration: none;
      background-color: transparent;
    }

  &.is_transparent {
    background: transparent;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    border-bottom: 0;
    background-color: transparent;
    transition: all 0.4s ease-out;
    box-shadow: none;

    .ant-menu {
      li {
        display: flex;
        background-color: transparent;
        amfr {
          background-color: transparent;
        }
        a {
          color: white;
          font-weight: 700;
          /* text-shadow: 1px 1px 1px ${GREY}; */

          &.register {
            color:white;
          }
         
          
        }
        
      }
    
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  > a {
    margin-right: 27px;
  }

  &>svg {
    fill: red;
    color: red;
  }
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  margin-left: 30px;
  margin-right: 20px;

  .avatar-dropdown {
    position: relative;

    .dropdown-handler {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;
      border: 3px solid ${RED};
      

      /* box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; */
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .dropdown-menu {
      display: flex;
      padding: 20px;
      flex-direction: column;
      min-width: 180px;
      min-height: 200px;
      border-right: 0;
      position: absolute;
      right: 0;
      top: 100px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      &.hide {
        opacity: 0;
        visibility: hidden;
      }
      &.active {
        opacity: 1;
        visibility: visible;
      }
      li {
        display: flex;
        width: 100%;
        font-weight: 700;
        padding: 20px;
        transition: color 0.2s ease-in-out;
        align-items: center;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }


        a {
          color: ${GREY};
          transition: color 0.2s ease-in-out;
          &:hover {
            color: ${RED};
          }
          &.active {
            font-weight: 700;
            color: ${RED};
          }
        svg {
          display: flex;
          color: ${GREY};
          font-size: 20px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          overflow: visible;
        
        
        }

        }
        
        button {
          margin-top: 20px;
          padding: 0;
          border: 0;
          cursor: pointer;
          width: 100%;
          text-align: left;
          background-color: transparent;
          transition: color 0.2s ease-in-out;
          color: ${RED};
          font-weight: 700;

          svg {
            margin-right: 15px;
            font-size: 20px;
          }

          &:hover {
            color: ${RED};
          }
          &:focus {
            outline: none;
          }
          &.header--menu--espace {
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
            margin: 4% 0;
          }
        }
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    li {
      margin: 0 11px;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;
      color: ${GREY};
      font-size: 1em;
      line-height: 18px;
      font-weight: 500;
      transition: color 0.2s ease-in-out;
      @media only screen and (max-width: 1200px) {
        margin: 0 10px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &.ant-menu-item-selected,
      &.ant-menu-item-active {
        background-color: transparent;
      }

      a {
        padding: 30px 16px;
        color: ${DARK_GREY};
        transition: color 0.2s ease-in-out;
        @media only screen and (max-width: 1200px) {
          padding: 30px 10px;
        }
        &:hover {
          color: ${RED};
        }
        &.active {
          font-weight: 700;
          color:white;
          border-bottom: 3px solid ${themeGet('primary.0', '#01073a')};
        }
      }
    }
  }
`;

export const AuthWrapper = styled.div`

  ul,
  .ant-menu,
  ul.ant-menu {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;

    li {
      margin: 0;
      padding: 0;
      height: auto;
      margin-bottom: 0 !important;
      color: ${GREY};
      font-size: 14px;
      line-height: 16px;
      font-weight: 700;
      transition: color 0.2s ease-in-out;
      &.ant-menu-item-selected {
        background-color: transparent;
      }

      a {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        justify-content: center;
        min-width: 78px;
        min-height: 38px;
        border-radius: 22px;
        color: ${themeGet('text.0', '#2C2C2C')};
        transition: color 0.2s ease-in-out;
        &:hover {
          color: ${RED};
        }
      }

      &:last-child {
        a {
          color: ${themeGet('color.1', '#ffffff')};
          background-color: ${RED};
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
`;

export default NavbarWrapper;
