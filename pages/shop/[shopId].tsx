import React from "react";
import { useRouter } from "next/router";
import { Block, Text } from "vcc-ui";

export default function ShopPage() {
  const router = useRouter();
  return (
    <Block extend={{ textAlign: "center", margin: "4 rem" }} as="h1">
      <Text subStyle="emphasis"> Shop : Volvo {router.query.shopId}</Text>
    </Block>
  );
}
