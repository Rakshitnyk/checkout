import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 150px; /* Adjust width as needed */
  height: 150px; /* Adjust height for a square box */
  border-radius: 10px;
  background:rgb(20, 20, 20);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.9); /* Shadow effect */
  cursor: pointer;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 60px; /* Adjust image size */
    height: 60px;
    margin-bottom: 10px;
    object-fit: contain;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color:white;
  }
`;

const CategoryCard = ({ icon, label }) => {
  return (
    <Card>
      <img src={icon} alt={label} onError={(e) => (e.target.src = "https://via.placeholder.com/60")} />
      <p>{label}</p>
    </Card>
  );
};

export default CategoryCard;