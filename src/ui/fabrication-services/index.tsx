import Button from "@src/components/button";
import { Card } from "@src/components/card";
import { CardSteelsProps } from "@src/model/interface";
import { fabricationServices } from "@src/utils/data";

const FabricationServices = () => {
  return (
    <section className="px-5 my-20">
      <div className="flex flex-col gap-3 items-center my-10 ">
        <h2 className="font-semibold sm:text-4xl text-2xl">
          Fabrication and Installation Services
        </h2>
        <p className="text-gray-300 sm:text-base text-sm text-center">
          Explore our comprehensive range of services
        </p>
      </div>
      <div className="grid min-[1300px]:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {fabricationServices.map((product: CardSteelsProps) => (
          <Card padding="sm">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-md h-[300px]"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <div className="flex justify-between min-[330px]:flex-row flex-col min-[330px]:gap-0 gap-3">
              <Button>Add to cart</Button>
              <Button variant="outline">View details</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default FabricationServices;
