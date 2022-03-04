import React from "react";
import { Container } from "react-bootstrap";

interface ContainerModel {
  className?: string;
  fluid?: boolean;
  inCenter?: boolean;
}

const MainContainer: React.FC<ContainerModel> = ({
  className,
  fluid = true,
  inCenter = true,
  children,
}) => {
  return (
    <Container
      className={`pt-2 ${inCenter ? "text-center" : ""} ${className}`}
      fluid={fluid}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
