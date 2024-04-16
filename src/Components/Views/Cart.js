import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import React from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart({ data }) {
  const products = useSelector((element) => element.cartReducers.items);

  console.log(products);
  return (
    <>
      <Col>
        <CDropdown direction="center">
          <CDropdownToggle
            color="white"
            className="border-0 p-1 text-dark text-nowrap"
          >
            <CIcon icon={freeSet.cilCart} className="mx-1 " size="xl" />
            <CBadge color="danger" shape="rounded-pill">
              {data}
            </CBadge>
          </CDropdownToggle>
          <CDropdownMenu className="rounded-0 shadow-lg p-2 mt-3">
            {products?.map((item) => (
              <CDropdownItem className="text-dark mt-1">
                <CardImg
                  src={item.payload.images[0] || item.payload.images[1]}
                  style={{ width: "35px" }}
                />
                {item.payload.title}
              </CDropdownItem>
            ))}
            <CDropdownDivider />
            <CButton className="bg-secondary w-100 text-white rounded-1">
              Checkout
            </CButton>
          </CDropdownMenu>
        </CDropdown>
      </Col>
    </>
  );
}