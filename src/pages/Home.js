import React from 'react';
import '../App.css';
import "./Home.css"
import star from "./images/star.png"


function Home() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Premium Feed Solutions",
      desc: "Top-quality nutrition for your livestock.",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Sustainable Farming",
      desc: "Eco-friendly feed for a better future.",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
      title: "Trusted by Farmers",
      desc: "100+ clients, years of excellence.",
    },
  ];

  const slideGroups = [
    [
      { src: "https://images.unsplash.com/photo-1536009028388-e833a1f48a7b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed A", desc: "High protein." },
      { src: "https://images.unsplash.com/photo-1476916713558-2842194a8e49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed B", desc: "Eco-friendly." },
      { src: "https://images.unsplash.com/photo-1478695605156-f64b0ee877f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed C", desc: "Trusted choice." },
    ],
    [
      { src: "https://images.unsplash.com/photo-1618760439064-9c608de98e4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed D", desc: "Organic." },
      { src: "https://images.unsplash.com/reserve/1hyDEofHQ0OX1mRnvhqw_IMG_1324.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed E", desc: "Sustainable." },
      { src: "https://images.unsplash.com/photo-1508161949946-47160c5160fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Feed F", desc: "Farm favorite." },
    ],
  ];

  return (
    <div className="home">
       <section className="home-content">
        <h2>Welcome</h2>
        <p>We’re Nakshatra Feeds—top-quality feed solutions.</p>
        <p>Highlights: 100+ clients, years of trust.</p>
        <a href="/contact" className="cta">Get in Touch</a>
      </section>
      <div id="feedCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#feedCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#feedCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#feedCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={slide.src} className="d-block w-100 carousel-image" alt={slide.title} />
              <div className="carousel-caption">
                <h5 className="animate-slide-in">{slide.title}</h5>
                <p className="animate-slide-in">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#feedCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#feedCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    <section style={{ display: "flex", justifyContent: "flex-start", padding: "10px" }}>
    <div class="container px-4">
      <div class="row gx-5">
        <div class="col-4">
    <img
        src={star}
        alt="star"
        style={{ height: "400px", marginTop: "10px",position:"relative" }}
      />
        <a href="/contact" style={{marginTop:"-80px",position:"absolute",marginLeft:"-50px"}} className="cta">Our Products</a>
    </div>
    <div class="col-8">
     {/*slides */}
     <div id="feedCarousell" style={{height:"400px"}} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {slideGroups.map((group, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="d-flex justify-content-between">
                      {group.map((card, cardIndex) => (
                        <div className="card" key={cardIndex}>
                          <img src={card.src} className="card-img-top" alt={card.title} />
                          <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#feedCarousell" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#feedCarousell" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </div>
  </div>
</div>
    </section>
    <section className="home-content">
        <h2>Our services</h2>
        <p>We’re Nakshatra Feeds—top-quality feed solutions.</p>
        <p>Highlights: 100+ clients, years of trust.</p>
        <a href="/contact" className="cta">Get in Touch</a>
      </section>
    </div>
  );
}

export default Home;