import { Dropdown } from "antd";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { uzeReplace } from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";
import { Input, Button } from "../Generics";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./styled";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minRef = useRef();
  const maxRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    console.log(name, value);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

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
            <Input
              onChange={onChange}
              defaultValue={query.get("country")}
              ref={countryRef}
              name={"country"}
              placeholder={"Country"}
            />
            <Input
              onChange={onChange}
              defaultValue={query.get("region")}
              ref={regionRef}
              name={"region"}
              placeholder={"Region"}
            />
            <Input
              onChange={onChange}
              defaultValue={query.get("city")}
              ref={cityRef}
              name={"city"}
              placeholder={"City"}
            />
            <Input
              onChange={onChange}
              defaultValue={query.get("zip_code")}
              ref={zipRef}
              name={"zip_code"}
              placeholder={"Zip Code"}
            />
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
  console.log(uzeReplace("address", "Tashkent"));
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
