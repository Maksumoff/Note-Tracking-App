import { Dropdown } from "antd";
import { useRef, useState } from "react";
import { Input, Button } from "../Generics";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./styled";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minRef = useRef();
  const maxRef = useRef();

  const [open, setOpen] = useState(false);
  const onOpenChange = () => {
    setOpen(!open);
  };
  const items = [
    {
      key: "1",
      label: (
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input ref={countryRef} placeholder={"Country"} />
            <Input ref={regionRef} placeholder={"Region"} />
            <Input ref={cityRef} placeholder={"City"} />
            <Input ref={zipRef} placeholder={"Zip Code"} />
          </Section>
          <h1 className="subTitle">Apartment Info</h1>
          <Section>
            <Input ref={roomsRef} placeholder={"Rooms"} />
            <Input ref={sizeRef} placeholder={"Size"} />
            <Input ref={sortRef} placeholder={"Sort"} />
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input ref={minRef} placeholder={"Min price"} />
            <Input ref={maxRef} placeholder={"Max price"} />
          </Section>
        </MenuWrapper>
      ),
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Input
          icon={<Icons.House />}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          menu={{ items }}
          open={open}
          overlayStyle={{ maxWidth: 920, width: "100%" }}
          trigger={["click"]}
          onOpenChange={onOpenChange}
          placement="bottomRight"
          arrow={{
            pointAtCenter: false,
          }}
        >
          <div>
            <Button type="light">
              <Icons.Filter /> Advanced
            </Button>
          </div>
        </Dropdown>
        <Button>
          <Icons.Search /> Search
        </Button>
      </Container>
    </Wrapper>
  );
};
export default Filter;
