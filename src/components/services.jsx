export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Play around, find out!</h2>
          <p>NETpro is free for non-commercial, local use.</p>
          <p>
            Dive in and try it out for yourself by visiting our GitHub
            repository or checking out our step-by-step tutorial on YouTube!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 mx-auto">
                  {" "}
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    <i className={d.icon}></i>
                  </a>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text1}</p>
                    <p>{d.text2}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
