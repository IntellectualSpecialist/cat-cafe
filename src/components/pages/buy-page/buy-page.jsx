import React from "react";
import CafeGallery from "/src/components/blocks/cafe-gallery/cafe-gallery";
import Order from "/src/components/blocks/order/order";

function BuyPage({ slides, options }) {
  return (
    <>
      <CafeGallery slides={slides} />
      <Order options={options} />
    </>
  );
}

export default BuyPage;
