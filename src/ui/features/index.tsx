import { Card } from "@components/card";
import Button from "@src/components/button";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHammerLight, PiUsersLight } from "react-icons/pi";
const Features = () => {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10 px-5">
      <Card>
        <div className="flex gap-3 flex-col">
          <HiOutlineBuildingOffice2 size={50} />
          <h3 className="font-medium md:text-xl text-lg">All Kinds of Steel Materials</h3>
        </div>
        <p>
          Comprehensive range of steel products including mild steel, stainless
          steel, and galvanized steel materials.
        </p>
        <div>
          <Button>View materials</Button>
        </div>
      </Card>
      <Card>
        <div className="flex gap-3 flex-col">
          <PiHammerLight size={50} />
          <h3 className="font-medium md:text-xl text-lg">Fabrication and Maintenance</h3>
        </div>
        <p>
          Expert fabrication services and maintenance solutions for industrial
          applications
        </p>
        <div>
          <Button>View services</Button>
        </div>
      </Card>
      <Card>
        <div className="flex gap-3 flex-col">
          <PiUsersLight size={50} />
          <h3 className="font-medium md:text-xl text-lg">Job Vacancy</h3>
        </div>
        <p>
          Join our team of professionals. We're always looking for talented
          individuals.
        </p>
        <div>
          <Button>View openings</Button>
        </div>
      </Card>
    </section>
  );
};

export default Features;
