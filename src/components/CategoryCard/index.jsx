import { Blur, Container, Img, Wrapper } from "./styled";
import noimg from "../../assets/imgs/noimg.png";
import category from "../../assets/imgs/category.png";

export const CategoryCard = ({ data = {} }) => {
  const { name } = data;

  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Wrapper>{name || "Category Name"} </Wrapper>
    </Container>
  );
};
export default CategoryCard;
