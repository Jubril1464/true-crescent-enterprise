import React, { useState } from "react";
import Button from "@components/button";
import { Card } from "@components/card";
import { Layout } from "@components/page-layout";
import { CardSteelsProps } from "@src/model/interface";
import { mildsteelsProduct } from "@src/utils/data";
import { useNavigate } from "react-router-dom";
const ITEMS_PER_PAGE = 8; // Adjust this number as needed

const MildSteel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(mildsteelsProduct.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = mildsteelsProduct.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="products h-[30rem] flex flex-col items-center justify-center services text-center text-white">
        <h1 className="font-semibold min-[850px]:text-[4rem] sm:text-[3rem] text-3xl min-[850px]:w-[50rem] sm:leading-[70px]">
          Mild Steel
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          consequatur
        </p>
      </div>
      <div className="grid min-[1300px]:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 sm:px-10 px-5 mt-10 ">
        {currentProducts.map((product: CardSteelsProps) => (
          <Card key={product.id} padding="sm" >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-md h-[300px]"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <div className="flex justify-between min-[330px]:flex-row flex-col min-[330px]:gap-0 gap-3">
              <Button>Add to cart</Button>
              <Button
                variant="outline"
                onClick={() => navigate(`/products/mild-steel/${product.id}`)}
              >
                View details
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center my-8 space-x-2">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
        >
          Prev
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            size="sm"
            onClick={() => handlePageChange(index + 1)}
            variant={currentPage === index + 1 ? "primary" : "outline"}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
        >
          Next
        </Button>
      </div>
    </Layout>
  );
};

export default MildSteel;
