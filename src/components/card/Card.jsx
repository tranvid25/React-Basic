import React from "react";
import styled,{css} from "styled-components";
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  bottom: 0px;
  padding: 20px;
  width: 100%;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount=styled.span`
font-size: 18px;
font-weight: bold;
${props => props.secondary && css`

`};
background:linear-gradient(86.88deg,#7d6af7);
color: transparent;
-webkit-background-clip: text;

`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://plus.unsplash.com/premium_photo-1721076216277-22de7111cd06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://tse2.mm.bing.net/th?id=OIP.UqJmAJK4XD-mydc3HBTOPAHaK9&pid=Api&P=0&h=180"
              alt=""
            />
            <span>Trần vĩ </span>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CartTitle>siuuuuuu</CartTitle>
          <CardAmount>12000psu</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
