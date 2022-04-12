import React from 'react';
import styled from '@emotion/styled';
import { Spring } from 'react-spring';

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = (i) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor
      }}
      config={animationConfig}
    >
      {(style) => (
        <SlideContainer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformOrigin: 50,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
          }}
        >
          <SlideCard
            onClick={() => moveSlide(offsetFromMiddle)}
            style={{
              position: 'relative',

              fontSize: 35,

              transformOrigin: 50,

              padding: 10
            }}
          >
            <div className="slider row align-items-center p-3">
              <div className="col-md-10">
                <h6 className="fw-bold">
                  <span style={{paddingRight:10}}>{content.name}</span> |
                  <small style={{ color: '#1552F0', paddingLeft: 10 }}>
                    {content.company}
                  </small>
                  <span className="col testimonialImage d-block d-md-none" />
                </h6>
                <p className="desc pt-3">{content.desc}</p>
              </div>
              <div className="col testimonialImage d-none d-md-block"></div>
            </div>
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default Slide;
