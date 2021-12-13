import styled from "styled-components";

const Container = styled.div`
  flex: 1 1 auto;
  margin: 15px 7.5px 15px;
  height: 70vh;
  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  height: 90px;
  border: 1px solid black;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #6b6b6b;
`;
const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
const BackgroundImage = styled.div``;

const CategoryItem = ({ item }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${item.img})`,
      }}
    >
      <BackgroundImage />
      <Content>
        <Title>{item.title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </Container>
  );
};

export default CategoryItem;
