import React from 'react';

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    initial: "R",
    rating: 5,
    testimonial: "Excellent service! Fresh vegetables and fruits delivered right to my doorstep. The quality is always top-notch and delivery is super fast. Highly recommended!",
    color: "var(--arc-orange)"
  },
  {
    name: "Priya Sharma",
    initial: "P",
    rating: 5,
    testimonial: "Love shopping here! The app is very user-friendly and the prices are competitive. Free delivery on orders above ₹499 is a great bonus. Will definitely order again!",
    color: "var(--arc-rose)"
  },
  {
    name: "Amit Patel",
    initial: "A",
    rating: 4,
    testimonial: "Great variety of products and the quality is amazing. Customer support is very responsive. Occasionally had minor delays but overall a fantastic experience!",
    color: "var(--arc-jaune)"
  }
];

const TestimonialItem = ({ name, initial, rating, testimonial, color }) => {
  return (
    <figure className="creaBlock creaBlockPrez">
      <div className="lineSeparator" style={{ backgroundColor: color }}></div>
      <div className="blocImg">
        <div className="testimonial-avatar" style={{ backgroundColor: color }}>
          <span>{initial}</span>
        </div>
      </div>
      <div className="testimonial-content">
        <h2>{name}</h2>
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={i < rating ? "bi bi-star-fill" : "bi bi-star"}
            />
          ))}
        </div>
        <p className="testimonial-text">{testimonial}</p>
      </div>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-6">
            <div className="section-head text-center mt-8">
              <h1 className="h3style" style={{ color: "green" }}>
                Customer Testimonials
              </h1>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>
        <div className="creationsBlocUl">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialItem
              key={index}
              name={item.name}
              initial={item.initial}
              rating={item.rating}
              testimonial={item.testimonial}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
