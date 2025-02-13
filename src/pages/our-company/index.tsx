import { Layout } from "@components/page-layout";

const OurCompany = () => {
  return (
    <Layout>
      <div className="h-[30rem] flex flex-col items-center justify-center services text-center text-white">
        <h1 className="font-semibold min-[850px]:text-[4rem] sm:text-[3rem] text-3xl min-[850px]:w-[50rem] sm:leading-[70px]">
          Our Company
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          consequatur
        </p>
      </div>
      <article className="space-y-3 px-5 my-20">
        <p>The primary objectives of the company are :</p>
        <p>
          To generate revenue and maximize profits by selling building materials
          to construction companies, contractors, and individuals.
        </p>
        <p>
          <strong>Customer Satisfaction:</strong> To provide high-quality
          building materials and excellent customer service, ensuring customer
          satisfaction and loyalty.
        </p>
        <p>
          <strong>Market Leadership:</strong> To become a leading supplier of
          building materials in Nigeria, known for reliability, quality, and
          competitive pricing.
        </p>
        <p>
          <strong>Job Creation:</strong> To create employment opportunities for
          Nigerians, contributing to the country's economic growth and
          development.
        </p>
        <p>
          <strong>Supporting Infrastructure Development:</strong> To contribute
          to Nigeria's infrastructure development by providing essential
          building materials for construction projects.
        </p>
        <p>
          <strong>Innovation and Quality Improvement:</strong> To continuously
          improve product quality, explore new market opportunities, and adopt
          innovative technologies to stay competitive.
        </p>

       
      </article>
    </Layout>
  );
};

export default OurCompany;
