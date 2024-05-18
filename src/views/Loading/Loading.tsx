import React, { useEffect, useState } from 'react';
import { 
  LoadingContainer, 
  LogoContainer, 
  Logo 
} from './Loading.styles';

const Loading: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContainer>
      <LogoContainer showLogo={showLogo}>
        <Logo src="/path/to/your/logo.png" alt="Logo" />
      </LogoContainer>
    </LoadingContainer>
  );
};

export default Loading;
