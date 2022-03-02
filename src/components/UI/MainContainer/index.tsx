import React from "react";
import { Container } from "react-bootstrap";

const MainContainer: React.FC<{ className?: string; fluid?: boolean }> = ({
  className,
  fluid = true,
  children,
}) => {
  return (
    <Container className={`text-center ${className}`} fluid={fluid}>
      {children}
    </Container>
  );
};

export default MainContainer;
