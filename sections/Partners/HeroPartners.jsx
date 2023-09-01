const HeroPartners = ({ partnersData }) => {
  return (
    <section className="section-sp4 bg-gray-light">
      {partnersData.map((item) => (
        <div className="container">
          <div className="text-center m-t10 m-b20">
            <h3 className="fw4">{item.title}</h3>
            <hr className="borderSmall" />
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroPartners;
