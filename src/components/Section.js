import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <Itemtext>
                    <h1>{title}</h1>
                    <p>{description}</p>
            </Itemtext>
        </Fade>
        <Fade bottom>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100v;
    height: 100vh;
    background-image: ${props => `url(/images/${props.bgImage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Itemtext = styled.div`
    padding-top: 15vh;
    align-items: center;
`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 15px;
`

const LeftButton = styled.div`
    background: rgba(23, 26, 32, 0.8);
    opacity: 0.85;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: white;
    font-size: 12px;
    border-radius: 100px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animation infinite 1.5s;
    overflow-x: hidden;
`