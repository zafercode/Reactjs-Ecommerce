import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh"})}
`
const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: #fff;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: #fff;
color: #111;
font-weight: 600;
transition: all .5s ease-in-out;
cursor: pointer;

&:hover{
  background-color: teal;
  border-radius: 5px;
}
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
