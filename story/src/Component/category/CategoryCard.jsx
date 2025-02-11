import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CategoryCard = ({ icon, label }) => {
  return (
    <Card>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </Card>
  );
};

export default CategoryCard;