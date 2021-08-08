import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../modules/Button";
import Carousel from "../modules/Carousel";

type Size = {
  width: number;
  height: number;
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  padding-top: 80px;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const BackgroundBlue = styled.div`
  position: absolute;
  top: 190px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgb(144, 202, 249), rgba(255, 255, 255, 0) 45%);
`;
const BackgroundPurple = styled.div`
  position: absolute;
  top: -200px;
  right: 150px;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    rgba(211, 167, 254, 0.7),
    rgba(255, 255, 255, 0) 45%
  );
`;
const BackgroundCyan = styled.div`
  position: absolute;
  top: -200px;
  left: 300px;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    rgba(101, 246, 255, 0.7),
    rgba(255, 255, 255, 0) 45%
  );
`;
const IntroTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroText = styled.h1`
  font-family: "ExtraBold";
  font-size: 46px;
  line-height: 65px;
  margin-bottom: 48px;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const Contents = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0px 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 760px) {
    margin: 0px 60px;
  }
`;

const CarouselItem = styled.div`
  background-color: white;
  border-radius: 10px;
`;

const Intro: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [itemSize, setItemSize] = useState<Size>({
    width: 280,
    height: 560,
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCarouselItem = useCallback(
    (color: string) => {
      return (
        <CarouselItem
          style={{
            width: `${itemSize.width}px`,
            height: `${itemSize.height}px`,
            backgroundColor: color,
          }}
        />
      );
    },
    [itemSize],
  );

  useEffect(() => {
    if (width > 1200) {
      setItemSize({
        width: 280,
        height: 560,
      });
    } else if (width > 1000) {
      setItemSize({
        width: 180,
        height: 409,
      });
    } else {
      setItemSize({
        width: 135,
        height: 290,
      });
    }
  }, [width]);
  return (
    <Container>
      <BackgroundBlue />
      <BackgroundPurple />
      <BackgroundCyan />
      <Contents>
        <IntroTextWrap>
          <IntroText>
            간단한 클릭! 쉬운 의류제작! <br />
            3분만에 초보자가 <br />
            의류생산 전문가로 <br />
          </IntroText>
          <Button href="/#" fontSize={width > 1200 ? 24 : 18} fontFamily="Bold">
            실시간 제작 견적 확인
          </Button>
        </IntroTextWrap>
        {width > 850 && (
          <div style={{ marginLeft: "auto" }}>
            <Carousel
              itemHeight={itemSize.height}
              itemWidth={itemSize.width}
              items={[
                renderCarouselItem("red"),
                renderCarouselItem("blue"),
                renderCarouselItem("green"),
                renderCarouselItem("cyan"),
              ]}
            />
          </div>
        )}
      </Contents>
    </Container>
  );
};

export default Intro;
