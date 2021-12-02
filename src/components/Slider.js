import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import { slideItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: '100%';
    height: '100vh';
    display: 'flex';
    position: 'relative';
    overflow: 'hidden';
    ${mobile({ display: 'none' })}
`

const Arrow = styled.div({
    width: '50px',
    height: '50px',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    cursor: 'pointer',
    opacity: .5,
    zIndex: '2',
})

const Wrapper = styled.div({
    height: '100%',
    display: 'flex',
    transition: 'all 1s ease',
})

const Slide = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
})

const ImgContainer = styled.div({
    height: '100%',
    flex: 1,
})

const Image = styled.img({
    height: '80%',
})

const InfoContainer = styled.div({
    flex: 1,
    padding: '50px',
})

const Title = styled.h1({
    fontSize: '70px',

})

const Desc = styled.p({
    margin: '50px 0',
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '3px',
})

const Button = styled.button({
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
})

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" style={{ left: '10px' }} onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {slideItems.map(item => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" style={{ right: '10px' }} onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
