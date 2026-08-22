import "../assets/css/Journey.css";

const Journey = () => {
  const milestones = [
    {
      id: 1,
      year: "2012",
      title: "Evolution of Restaurants",
      description:
        "Sarab opens its first 20-seat diner on Flavor Street. Within 3 months, lines stretch around the block every evening as word of our food spreads.",
    },
    {
      id: 2,
      year: "2015",
      title: "Fine Dining & The Concept",
      description:
        "Expanding the vision - we introduced our signature tasting menu and hired our first Michelin-trained chef, elevating our craft to remarkable new heights.",
    },
    {
      id: 3,
      year: "2019",
      title: "Modern Fast Food Origins",
      description:
        "Launched our signature fast-food line, merging gourmet quality with speed and convenience. Within 6 months we won 3 prestigious culinary awards nationally.",
    },
    {
      id: 4,
      year: "2026",
      title: "National Expansion",
      description:
        "Now operating in 8 cities across the US with an online delivery platform handling 10,000+ orders weekly - and growing every single day.",
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-heading">
        <span>Our Journey</span>
        <h2>
          A History of <b>Restaurant</b>
        </h2>
        <div className="journey-underline"></div>
        <p>
          From humble beginnings to the city's most beloved restaurant -
          every chapter written with passion.
        </p>
      </div>

      <div className="journey-timeline">
        <div className="journey-line"></div>

        {milestones.map((item, index) => (
          <div
            className={`journey-row ${
              index % 2 === 0 ? "journey-left" : "journey-right"
            }`}
            key={item.id}
          >
            <div className="journey-content">
              <span className="journey-year">{item.year}</span>
              <h4 className="journey-title">{item.title}</h4>
              <p className="journey-desc">{item.description}</p>
            </div>

            <div className="journey-dot"></div>

            <div className="journey-empty"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;