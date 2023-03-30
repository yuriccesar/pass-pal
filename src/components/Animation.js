import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LockIcon from "@material-ui/icons/Lock";
import SecurityIcon from "@material-ui/icons/Security";

import PasswordIcon from "@material-ui/icons/VpnKey";

const icons = [
  <LockIcon />,
  <SecurityIcon />,
  <PasswordIcon />,
  <LockIcon />,
  <SecurityIcon />,
  <PasswordIcon />,
  <LockIcon />,
  <SecurityIcon />,
  <PasswordIcon />,
];


const animation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const textAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: red;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const Icon = styled.div`
  opacity: ${({ index, currentIndex }) => (index === currentIndex ? 1 : 0)};
  animation: ${({ index }) => animation} 1s linear infinite;
  animation-delay: ${({ index }) => index * 0.1}s;
  margin: 0 10px;
`;

const Text = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  letter-spacing: 0.5rem;
`;

const AnimatedText = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  letter-spacing: 0.5rem;
  animation: ${textAnimation} 2s linear infinite;
`;

export default function Animation() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [randomString, setRandomString] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % icons.length);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnimationComplete(true);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      setRandomString(result);
    }
  }, [isAnimationComplete]);

  return (
    <Container>
      {isAnimationComplete ? (
        <AnimatedText>{randomString.split('').join(' ')}</AnimatedText>
      ) : (
        <>
          <IconContainer>
            {icons.map((icon, index) => (
              <Icon key={index} index={index} currentIndex={currentIndex}>
                {icon}
              </Icon>
            ))}
          </IconContainer>
          <Text>Encrypting</Text>
        </>
      )}
    </Container>
  );
}
