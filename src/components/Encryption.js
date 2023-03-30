import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { red } from '@material-ui/core/colors';
import {
  LockOutlined,
  SecurityOutlined,
  VpnKeyOutlined,
  BugReportOutlined,
  HttpsOutlined,
  AccountBalanceOutlined,
  VerifiedUserOutlined,
  HowToRegOutlined,
  Lock
} from '@material-ui/icons';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledIcon = styled.div`
  font-size: 5rem;
  color: ${red[500]};
  margin: 1rem;
  animation: changeIcon 0.5s linear infinite;

  @keyframes changeIcon {
    0% {
      opacity: 1;
      transform: rotate(0);
    }
    50% {
      opacity: 0.5;
      transform: rotate(180deg);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
  }
`;

const StyledPassword = styled.div`
  font-size: 5rem;
  color: ${red[500]};
  animation: changeLetter 0.1s linear;

  @keyframes changeLetter {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Encrypt = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-200%);
    opacity: 0;
  }
`;

const EncryptIcon = styled(Lock)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: ${Encrypt} 1s ease-in-out infinite;
`;


const generatePassword = () => {
  const length = 26;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}":>?,.|';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export default function Encryption(){
  const [showIcons, setShowIcons] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showText, setShowText] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const iconsTimeout = setTimeout(() => {
      setShowIcons(false);
      setShowPassword(true);
    }, 2000);

    const passwordTimeout = setTimeout(() => {
      setPassword(generatePassword());
      setShowPassword(false);
      setShowText(true);
    }, 4000);

    const textTimeout = setTimeout(() => {
      setShowText(false);
    }, 6000);


    return () => {
      clearTimeout(iconsTimeout);
      clearTimeout(passwordTimeout);
      clearTimeout(textTimeout);
    };
  }, []);


  return (
    <StyledContainer>
      <StyledIcon><LockOutlined /></StyledIcon>
      <StyledIcon><SecurityOutlined /></StyledIcon>
      <StyledIcon><VpnKeyOutlined /></StyledIcon>
      <StyledIcon><BugReportOutlined /></StyledIcon>
      <StyledIcon><HttpsOutlined /></StyledIcon>
      <StyledIcon><AccountBalanceOutlined /></StyledIcon>
      <StyledIcon><VerifiedUserOutlined /></StyledIcon>
      <StyledIcon><HowToRegOutlined /></StyledIcon>
      {password.split('').map((letter, index) => (
        <StyledPassword key={index}>{letter}</StyledPassword>
      ))}
      <div>Create, and Never Remember</div>
    </StyledContainer>
  );
};

