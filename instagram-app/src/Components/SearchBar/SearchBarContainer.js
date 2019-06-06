import React from 'react';
import './SearchBar.css';
import { FaCompass, FaHeart, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';

const StyledSearch = styled.div`
border-bottom: 1px solid #3333;
height: 80px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
`;

const StyledImgWrapper = styled.div`
height: 50px;
margin-left: 5px;
`;

const StyledIconWrapper = styled.div`
display: flex;
flex-direction: row;
`;

const StyledSocial = styled.div`
width: 20px;
height: 20px;
margin-right: 20px;
`;


const SearchBar = props => {
    return (
      <StyledSearch>
        <StyledImgWrapper>
          <img alt="instagram logo" src='https://image.flaticon.com/icons/png/512/87/87390.png' className="logo-image" />
        </StyledImgWrapper>
        <div>
          <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
        </div>
        <StyledIconWrapper>
          <StyledSocial>
            <FaCompass />
          </StyledSocial>
          <StyledSocial>
            <FaHeart />
          </StyledSocial>
          <StyledSocial>
            <FaUserAlt />
          </StyledSocial>
        </StyledIconWrapper>
      </StyledSearch>
    );
  };

  export default SearchBar;