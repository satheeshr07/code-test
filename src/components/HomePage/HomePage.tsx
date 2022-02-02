/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Flex, Icon } from "vcc-ui";
import Filter from "../Filter/Filter";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Car } from "../../types";

export const HomePage: React.FC = () => {
  const [bodyType, setBodyType] = useState("");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    axios
      .get("./api/cars.json")
      .then((res) => {
        console.log(res);
        setAllData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const uniqueCarTypes = new Set(allData.map((car: Car) => car.bodyType));
  const carType = [...Array.from(uniqueCarTypes)];

  const onBodyTypeChange = (e: any) => {
    setBodyType(e.target.value);
    const allCars = [...allData];
    const filteredCars: any = allCars
      .map((i: Car) => (e.target.value === i.bodyType ? i : null))
      .filter((i: any) => i !== null);

    if (filteredCars.length > 0) {
      setFilteredData(filteredCars);
    } else {
      setFilteredData(allCars);
    }
  };
  return (
    <Flex extend={{ padding: 10 }} className="HomePage">
      <Filter
        options={carType}
        selectedOption={bodyType}
        onChange={onBodyTypeChange}
      />
      <ProductSlider products={filteredData} sliderRef={sliderRef} />
      <Flex className="button-nav">
        <img
          src="/images/chevron-circled.svg"
          alt="previous"
          aria-label="previous"
          onClick={() => sliderRef?.current?.slickPrev()}
          className="button-prev"
        />
        <img
          src="/images/chevron-circled.svg"
          alt="next"
          aria-label="next"
          onClick={() => sliderRef?.current?.slickNext()}
          className="button-next"
        />
      </Flex>
    </Flex>
  );
};
