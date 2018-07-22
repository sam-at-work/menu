import styled from "styled-components";
import React from "react";

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.2em;
`;

const Price = Title.extend``;

const Item = styled.span`
  // block element needed for ::first-letter to work
  display: inline-block;
  
  :first-child::first-letter {
    text-transform: capitalize;
  }

  //:not(:last-child):not(:nth-last-child(2)):after {
  :not(:last-child):after {
    content: ", ";
    white-space: pre;
  }
  
  :nth-last-child(2):after {
    content: ", & ";
    white-space: pre;
  }
`;

const StyledMenuItem = styled.div`
  .top-row {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuItem = ({ name, price, ingredients }) => {
  // debugger;
  return (
    <StyledMenuItem>
      <div className={"top-row"}>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </div>
      <div>
        {ingredients.map(item => <Item key={item}>{item}</Item>)}
      </div>
    </StyledMenuItem>
  );
};
