import React, { FC, ReactNode } from "react";
import "./styled.scss";

interface ICard {
  children: ReactNode;
}

const Card: FC<ICard> = ({ children, ...props }) => {
  return (
    <div className="border" {...props}>
      {children}
    </div>
  );
};

export default Card;
