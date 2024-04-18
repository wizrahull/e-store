import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardImg } from "react-bootstrap";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addCart } from "../../Management/Features/cartSlice";
import emptyImage from "./empty.png";
import { useSelector } from "react-redux";

export default function RecentItems() {
  const dispatch = useDispatch();
  const products = useSelector((item) => item.recentReducer.items);
  console.log(products);
  console.log(products.length);

  return (
    <>
      <div className="row">
        <p>Recently Viewed</p>
        {products.map((items) => (
          <Card
            key={items.id}
            className="col-sm-4 col-lg-2 m-3 p-0 border-0 rounded-1 shadow-lg"
          >
            <NavLink to={`/products/${items.id}`}>
              <CardImg
                className="card_image rounded-1"
                src={items?.images[0] || emptyImage}
                alt="NA"
                style={{
                  // width: "220px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <CardHeader className="text-success fw-light">
                {items?.title?.slice(0, 20)}
              </CardHeader>
            </NavLink>

            <CardBody className="px-2">
              <div className="row p-0 m-0">
                <div className="col text-secondary text-nowrap ">
                  Price: {items?.price} $
                </div>
                <div className="col"></div>
              </div>

              <Button
                className="m-0 w-100 bg-secondary rounded-0 border-0"
                onClick={() => dispatch(addCart(items))}
              >
                Add to cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
