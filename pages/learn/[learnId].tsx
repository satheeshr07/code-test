import React from "react";
import { useRouter } from "next/router";
import { Block, Text } from "vcc-ui";

export default function LearnPage() {
  const router = useRouter();
  return (
    <Block extend={{ textAlign: "center", margin: "4 rem" }} as="h1">
      <Text subStyle="emphasis"> Learn : Volvo {router.query.learnId}</Text>
    </Block>
  );
}
