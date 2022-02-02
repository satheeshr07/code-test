import React, { FC } from "react";
import { Flex, Link } from "vcc-ui";

interface Props {
  productId: string;
}
const ProductLinks: FC<Props> = ({ productId }) => {
  return (
    <Flex
      extend={{
        justifyContent: "space-around",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <Link href={`/learn/${productId}`} arrow="right">
        Learn
      </Link>
      <Link href={`/shop/${productId}`} arrow="right">
        Shop
      </Link>
    </Flex>
  );
};

export default ProductLinks;
