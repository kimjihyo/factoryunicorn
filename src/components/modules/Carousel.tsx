/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import LeftArrow from "../../assets/images/left_arrow.svg";
import RightArrow from "../../assets/images/right_arrow.svg";

type Props = {
  items: React.ReactElement[];
  itemWidth: number;
  itemHeight: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavButton = styled.button`
  display: inline-block;
  background-color: #00000000;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const CarouselItems = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

const CarouselItem = styled.div`
  width: fit-content;
  transition: transform 0.4s;
`;

const Carousel: React.FC<Props> = ({ items, itemWidth, itemHeight }: Props) => {
  const min = useMemo(
    () => itemWidth * (items.length - 1) * -1,
    [items, itemWidth],
  );
  const [transitionX, setTransitionX] = useState(0);
  const onLeftClick = useCallback(() => {
    setTransitionX((prev) => {
      if (prev === 0) {
        return min;
      }
      return prev + itemWidth;
    });
  }, [itemWidth]);
  const onRightClick = useCallback(() => {
    setTransitionX((prev) => {
      if (prev === min) {
        return 0;
      }
      return prev - itemWidth;
    });
  }, [min, itemWidth]);

  useEffect(() => {
    setTransitionX(0);
  }, [itemWidth]);
  return (
    <Container>
      <NavButton onClick={onLeftClick} style={{ marginRight: "12px" }}>
        <Img src={LeftArrow} />
      </NavButton>
      <CarouselItems
        style={{
          width: `${itemWidth}px`,
          height: `${itemHeight}px`,
        }}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            style={{ transform: `translateX(${transitionX}px)` }}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselItems>
      <NavButton onClick={onRightClick} style={{ marginLeft: "12px" }}>
        <Img src={RightArrow} />
      </NavButton>
    </Container>
  );
};

export default Carousel;
