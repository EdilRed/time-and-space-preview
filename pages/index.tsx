import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "@emotion/styled"

import MainLogo from "public/assets/large-logo.svg"

import { palette, SIZE, BREAKPOINTS } from "styles"

const Container = styled.div`
  padding: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
`

const WhiteView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${palette.lightBackground};
  z-index: 0;
  visibility: hidden;

  animation: showAndHide 2s 4.8s ease-in-out;
`

const Main = styled.main`
  min-height: 100vh;
  padding: 8rem 8rem;
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  overflow-x: hidden;
  z-index: 10;

  @media ${BREAKPOINTS.laptop} {
    padding: 8rem 4rem;
  }

  @media ${BREAKPOINTS.tablet} {
    padding: 6rem 2rem;
  }

  @media ${BREAKPOINTS.mobileL} {
    padding: 4rem 2rem;
    gap: 0;
  }
`

const HeaderWrapper = styled.div`
  justify-self: flex-start;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  @media ${BREAKPOINTS.laptop} {
    align-self: flex-end;
  }

  @media ${BREAKPOINTS.tablet} {
    align-self: flex-end;
  }

  @media ${BREAKPOINTS.mobileL} {
    align-self: flex-end;
  }

  animation: hidden both 8s 8s, appear 2s 7s ease-in, wait 1.5s 9s ease-in-out,
    moveUp 2s 10.5s ease-in;
`

const Header = styled.h1`
  line-height: 1.2;
  font-size: 3.6rem;
  text-align: center;

  @media ${BREAKPOINTS.laptop} {
    font-size: 3rem;
  }

  @media ${BREAKPOINTS.tablet} {
    font-size: 2.4rem;
  }

  @media ${BREAKPOINTS.mobileL} {
    font-size: 2rem;
  }
`

const LogoWrapper = styled.div`
  width: 80%;
  justify-self: center;
`

const StyledImage = styled(Image)`
  z-index: 100;

  animation: hidden both 13.5s 13.5s, fadeIn 0.5s 13.5s ease-out;
`

const EndText = styled.span`
  /* visibility: hidden; */
  z-index: 100;
  line-height: 1.2;
  font-size: 2.6rem;
  text-align: center;

  @media ${BREAKPOINTS.laptop} {
    font-size: 2.4rem;
    align-self: flex-start;
  }

  @media ${BREAKPOINTS.tablet} {
    font-size: 2rem;
    align-self: flex-start;
  }

  @media ${BREAKPOINTS.mobileL} {
    font-size: 1.4rem;
    align-self: flex-start;
  }

  animation: hidden both 16.5s 16.5s, fadeIn 0.5s 16.5s ease;
`

const PointingLightWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const PointingLight = styled.div`
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  opacity: 0.5;

  transform: translateY(-100%);
  /* transform: scale(1000); */

  background-image: radial-gradient(
    circle closest-side,
    rgba(236, 234, 235, 0.8),
    rgba(234, 233, 234, 0.76),
    rgba(230, 229, 230, 0.66),
    rgba(224, 222, 223, 0.49),
    rgba(214, 214, 214, 0.26),
    rgba(204, 204, 204, 0)
  );

  animation: fall 4s ease-in, explode 1.5s 4s ease-out;
`

const TopCircleLight = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 75rem;
  height: 75rem;
  border-radius: 50%;
  background: linear-gradient(
    0deg,
    rgba(236, 234, 235, 0.09) 0%,
    rgba(236, 234, 235, 0.1) 20%,
    rgba(158, 157, 158, 0.061) 48%,
    rgba(92, 92, 92, 0.028) 73%,
    rgba(52, 52, 52, 0.008) 91%,
    rgba(36, 36, 36, 0) 100%
  );
  z-index: 2;

  @media ${BREAKPOINTS.laptop} {
    width: 68rem;
    height: 68rem;
    top: 4%;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 54rem;
    height: 54rem;
    top: 24%;
  }

  @media ${BREAKPOINTS.mobileL} {
    width: 30rem;
    height: 30rem;
    top: 30%;
  }

  animation: hidden both 14s 14s, collapseDown 1s 14s ease;
`

const BottomCircleLight = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  /* margin-left: auto;
  margin-right: auto; */
  transform: translateX(-50%);
  left: 50%;
  overflow-x: hidden;

  width: 105rem;
  height: 105rem;
  bottom: -70rem;
  border-radius: 50%;
  background: linear-gradient(
    0deg,
    rgba(236, 234, 235, 0.09) 0%,
    rgba(220, 218, 219, 0.082) 6%,
    rgba(178, 177, 177, 0.062) 18%,
    rgba(111, 111, 111, 0.029) 36%,
    rgba(51, 51, 51, 0) 50%,
    rgba(111, 111, 111, 0.029) 64%,
    rgba(178, 177, 177, 0.062) 82%,
    rgba(220, 218, 219, 0.082) 94%,
    rgba(236, 234, 235, 0.09) 100%
  );
  z-index: 3;

  @media ${BREAKPOINTS.laptop} {
    width: 90rem;
    height: 90rem;
    bottom: -20%;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 78rem;
    height: 78rem;
    bottom: -18%;
  }

  @media ${BREAKPOINTS.mobileL} {
    width: 50rem;
    height: 50rem;
    bottom: -14%;
  }

  animation: hidden both 14s 14s, collapseUp 1s 14s ease;
`

const InnerCircleLight = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  width: 37rem;
  height: 37rem;
  bottom: -20rem;
  background: radial-gradient(
    50% 50% at 49.98% 50%,
    rgba(236, 234, 235, 0.2) 0%,
    rgba(234, 233, 234, 0.19) 11%,
    rgba(230, 229, 230, 0.165) 28%,
    rgba(224, 222, 223, 0.1225) 50%,
    rgba(214, 214, 214, 0.065) 75%,
    rgba(204, 204, 204, 0) 100%
  );
  z-index: 1;

  @media ${BREAKPOINTS.laptop} {
    bottom: -10%;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 36rem;
    height: 36rem;
    bottom: -4%;
  }

  @media ${BREAKPOINTS.mobileL} {
    width: 20.5rem;
    height: 20.5rem;
    bottom: 16%;
  }

  animation: hidden both 15.5s 15.5s, fadeIn 0.5s 15.5s ease;
`

const Home: NextPage = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: undefined,
    dynamicHeight: undefined,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setDimension)

      setDimension()

      return () => {
        window.removeEventListener("resize", setDimension)
      }
    }
  }, [])

  const renderHeader = () => {
    if (screenSize.dynamicWidth < SIZE.mobileL) {
      return (
        <HeaderWrapper>
          <Header>
            {"The greatest asset one can\npossess is Time and Space."}
          </Header>
          <Header>
            {"Life happens not only in Space,\nbut also in Time."}
          </Header>
          <Header>
            {"Therefore, true wellbeing in life\nis a delicate balance between"}
          </Header>
        </HeaderWrapper>
      )
    } else if (screenSize.dynamicWidth < SIZE.laptop) {
      return (
        <HeaderWrapper>
          <Header>
            {"The greatest asset one can possess is\nTime and Space"}
          </Header>
          <Header>
            {"Life happens not only in Space, but also\nin Time."}
          </Header>
          <Header>
            {"Therefore, true wellbeing in life is a\ndelicate balance between"}
          </Header>
        </HeaderWrapper>
      )
    } else {
      return (
        <HeaderWrapper>
          <Header>
            {
              "The greatest asset one can possess is Time and Space.\nLife happens not only in Space, but also in Time.\nTherefore, true wellbeing in life is a delicate balance between"
            }
          </Header>
        </HeaderWrapper>
      )
    }
  }

  const renderLogo = () => {
    if (screenSize.dynamicWidth < SIZE.mobileL) {
      return (
        <LogoWrapper>
          <StyledImage
            src={MainLogo}
            alt={"Time & Space Logo"}
            objectFit="cover"
          />
        </LogoWrapper>
      )
    } else {
      return (
        <StyledImage
          src={MainLogo}
          alt={"Time & Space Logo"}
          width="70"
          height="70"
        />
      )
    }
  }

  return (
    <Container>
      <Head>
        <title>{"Time & Space"}</title>
        <meta
          name="description"
          content={"Time & Space under construction webpage"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PointingLightWrapper>
        <PointingLight />
      </PointingLightWrapper>
      <WhiteView />

      <TopCircleLight />
      <BottomCircleLight />
      <InnerCircleLight />

      <Main>
        {renderHeader()}
        {renderLogo()}

        <EndText>Be ready to experience the moment</EndText>
      </Main>
    </Container>
  )
}

export default Home
