import { useEffect, useState } from "react";
import { Layout } from "@src/components/page-layout";
import { fabricationProductServices } from "@src/utils/data";
import { useParams } from "react-router-dom";
import { ProductDetails } from "@src/model/interface";
import { CiRuler } from "react-icons/ci";
import { LuMail, LuPhone } from "react-icons/lu";
import { BiCertification } from "react-icons/bi";
import { PiStandardDefinitionThin, PiWall } from "react-icons/pi";
import Button from "@src/components/button";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
const FabricationProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState<ProductDetails>(
    {} as ProductDetails
  );

  useEffect(() => {
    setProductDetails(
      fabricationProductServices.find((product) => product.id == Number(id)) ||
        ({} as ProductDetails)
    );
  }, [id]);
  return (
    <Layout>
      <div>
        <div className="products h-[30rem] flex flex-col items-center justify-center services text-center text-white">
          <h1 className="font-semibold min-[850px]:text-[4rem] sm:text-[3rem] text-3xl min-[850px]:w-[50rem] sm:leading-[70px]">
            Welding and Consumables
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            consequatur
          </p>
        </div>

        <div className="mt-10 px-5">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <LiaAngleLeftSolid /> Back to Products
          </Button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-20 px-5">
          <figure className="sm:h-[40rem] h-[20rem] w-full rounded-md">
            <img
              src={productDetails?.image}
              alt={productDetails.name}
              className="w-full h-full object-cover rounded-md"
            />
          </figure>

          <div className="space-y-4">
            <h1 className="font-semibold text-3xl">{productDetails.name}</h1>
            <div className="p-4 rounded-md border border-gray-200 flex flex-col gap-3 shadow-sm">
              <h3 className="font-semibold text-xl">Specifications</h3>
              {productDetails?.details?.sizes && (
                <div className="flex items-center gap-2">
                  <CiRuler />
                  <p>
                    Size Range:&nbsp;
                    <span className="text-gray-500">
                      {productDetails.details.sizes}
                    </span>
                  </p>
                </div>
              )}
              {productDetails?.details?.length && (
                <div className="flex items-center gap-2">
                  <CiRuler />
                  <p>
                    Length:&nbsp;
                    <span className="text-gray-500">
                      {productDetails.details.length}mm
                    </span>
                  </p>
                </div>
              )}
              {productDetails?.details?.certificate && (
                <div className="flex items-center gap-2">
                  <BiCertification />
                  <p>
                    Certificate:&nbsp;
                    <span className="text-gray-500">
                      {productDetails?.details?.certificate}
                    </span>
                  </p>
                </div>
              )}
              {productDetails?.details?.standard && (
                <div className="flex items-center gap-2">
                  <PiStandardDefinitionThin />
                  <p>
                    Standard:&nbsp;
                    <span className="text-gray-500">
                      {productDetails?.details?.standard}
                    </span>
                  </p>
                </div>
              )}
              {productDetails?.details?.thickness && (
                <div className="flex items-center gap-2">
                  <PiWall />
                  <p>
                    Thickness:&nbsp;
                    <span className="text-gray-500">
                      {productDetails?.details?.thickness}
                    </span>
                  </p>
                </div>
              )}
              {productDetails?.details?.wallThickness && (
                <div className="flex items-center gap-2">
                  <PiWall />
                  <p>
                    Wall Thickness:&nbsp;
                    <span className="text-gray-500">
                      {productDetails?.details?.wallThickness}
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-xl">Product Description</h3>
              <p>{productDetails?.details?.about}</p>
            </div>
            <hr className="bg-gray-200" />
            <div className="space-y-3">
              <h3 className="font-semibold text-xl">Contact Infomation</h3>
              <div className="flex items-center gap-3">
                <LuPhone />
                <span>+2348021491086</span>
              </div>
              <div className="flex items-center gap-3">
                <LuMail />
                <span>contact@truecrescent.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FabricationProductDetails;
