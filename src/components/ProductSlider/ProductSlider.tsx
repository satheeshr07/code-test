/* eslint-disable @next/next/no-img-element */
import React, { FC, RefObject } from "react";
import Slider from "react-slick";
import { Flex, Text, Block, useTheme } from "vcc-ui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductLinks from "../ProductLinks/ProductLinks";
import { Car } from "../../types";

interface Props {
  products: Car[];
  sliderRef: RefObject<Slider>;
}
const ProductSlider: FC<Props> = ({ products, sliderRef }) => {
  const theme = useTheme();
  const defaultSliderLength = 4;
  const settings = {
    slidesToShow:
      products.length < defaultSliderLength
        ? products.length
        : defaultSliderLength,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            products.length < defaultSliderLength
              ? products.length
              : defaultSliderLength,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {products.map((product: Car) => (
        <Flex key={product.id}>
          <Block extend={{ flex: 1 }}>
            <Text
              extend={{
                textTransform: "uppercase",
                color: theme.color.foreground.secondary,
              }}
              variant="bates"
              subStyle="emphasis"
            >
              {product.bodyType}
            </Text>
            <Block
              as="h4"
              extend={{
                margin: "0 0 4px 0",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Text
                as="span"
                extend={{ marginRight: 5 }}
                subStyle="emphasis"
                variant="columbus"
              >
                {product.modelName}
              </Text>
              <Text
                as="span"
                extend={{
                  marginLeft: 5,
                  color: theme.color.foreground.secondary,
                  textTransform: "capitalize",
                }}
                variant="columbus"
              >
                {product.modelType}
              </Text>
            </Block>
          </Block>
          <Block extend={{ margin: "15px 0" }}>
            <img
              className="car-img"
              src={product.imageUrl}
              alt={product.modelName}
            />
          </Block>
          <ProductLinks productId={product.id} />
        </Flex>
      ))}
    </Slider>
  );
};

export default ProductSlider;
