import styled from "styled-components";
import React from "react";

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.2em;
`;

const Price = Title.extend``;

const BaseItem = styled.span`
  // block element needed for ::first-letter to work
  display: inline-block;
  
  //:not(:last-child):not(:nth-last-child(2)):after {
  :not(:last-child):after {
    content: ", ";
    white-space: pre;
  }
`;

const Ingredient = BaseItem.extend`
  
  :first-child::first-letter {
    text-transform: capitalize;
  }
  
  :last-child:before {
    content: "and ";
    white-space: pre;
  }
`;

const Option = BaseItem.extend``;

const StyledMenuItem = styled.div`
  .top-row {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuItem = ({ name, price, ingredients=[], options=[] }) => {
  // debugger;
  return (
    <StyledMenuItem>
      <div className={"top-row"}>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </div>
      <div>
        {ingredients.map(item => <Ingredient key={item}>{item}</Ingredient>)}
      </div>
      <div>
        {options.map(item => <Option key={item}>{item}</Option>)}
      </div>
    </StyledMenuItem>
  );
};
