import { Layout } from "@components/page-layout";

const OurServices = () => {
  return (
    <Layout>
      <div className="h-[30rem] flex flex-col items-center justify-center services text-center text-white">
        <h1 className="font-semibold min-[850px]:text-[4rem] sm:text-[3rem] text-3xl min-[850px]:w-[50rem] sm:leading-[70px]">
          Our Services
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          consequatur
        </p>
      </div>
      <article className="space-y-3 px-5 my-20">
        <p>
          True crescent enterprise limited Ltd offers a comprehensive and
          competitive top quality iron steel integrations(Mild Steel, Stainless
          and Galvanized), Engineering and Mechanical tools, Steel Financing,
          Fabrications and Installation to the General Sectors down to the
          Household within Africa continent specifically Nigeria.
        </p>
        <p>Aspects of the services we offer include:</p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            Supplier of iron steel Integration such as Stainless Steel,
            Carbon/Mild Steel and Galvanized at various Specification sizes and
            requirement.
          </li>
          <li>
            Online Dealers of Engineering and Mechanical Equipment. We provide
            convenience and guaranteed at shopping of tools and order of our
            product at door step and site delivery.
          </li>
          <li>
            General labour mobilization: Whether you need one reliable,
            affordable temporary labour on welding, Steel burners and Operator.
            True crescent enterprise limited provide skilled personnel for
            technical or supervision services on project, contract and
            maintenance. Whatever your situation, if you need one worker for one
            day or more indefinitely.
          </li>
          <li>
            Fabrication and Installation: Tanks, Security panel, Guards, Fencing
            wires, Street light, Handrails, Scaffolding, Gate, Steel Doors,
            Swimming pool and farm guards, fencing, Road and Bridges guards just
            to mention a few.
          </li>
          <li>
            Finance of Iron Steel on demand for a project, contract and so on.
            We render services to Vendors, individual and cooperate company
            legally.
          </li>
          <li>
            Transportation services to any part of the country in Africa
            precisely Nigeria and provide a hire service of HIAB truck -
            trailer, Crane.
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default OurServices
