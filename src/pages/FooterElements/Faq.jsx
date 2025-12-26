import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "How do I add items to my cart?",
      answer:
        "Browse the products and click on the 'Add to Cart' button. You can view your cart anytime by clicking on the cart icon.",
    },
    {
      question: "Can I remove or update the quantity of items in my cart?",
      answer:
        "Yes, go to the cart page. You'll find options to increase, decrease, or remove each item from the cart.",
    },
    {
      question: "Do I need to create an account to order groceries?",
      answer:
        "You can browse items without an account, but placing an order requires a quick sign-up or login to ensure delivery and order tracking.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) based on availability in your area.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After placing your order, go to your profile > 'My Orders' to see live updates and order history.",
    },
    {
      question: "Is there a minimum order value for free delivery?",
      answer:
        "Yes, orders above ₹499 qualify for free delivery. A small delivery charge applies for smaller orders.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Frequently Asked Questions">
              Frequently Asked Questions
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section mt-8">
        <div className="row">
          <div className="col-md-12 mb-6">
            <div className="section-head text-center mt-8">
              <h1 className="h3style" style={{ color: "green" }} data-title="Customer Testimonials">
                Customer Testimonials
              </h1>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {/* Testimonial 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '20px', fontWeight: 'bold'}}>
                    R
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Rajesh Kumar</h5>
                    <div className="text-warning">★★★★★</div>
                  </div>
                </div>
                <p className="text-muted mb-0">
                  "Excellent service! Fresh vegetables and fruits delivered right to my doorstep. The quality is always top-notch and delivery is super fast. Highly recommended!"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '20px', fontWeight: 'bold'}}>
                    P
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Priya Sharma</h5>
                    <div className="text-warning">★★★★★</div>
                  </div>
                </div>
                <p className="text-muted mb-0">
                  "Love shopping here! The app is very user-friendly and the prices are competitive. Free delivery on orders above ₹499 is a great bonus. Will definitely order again!"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '20px', fontWeight: 'bold'}}>
                    A
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Amit Patel</h5>
                    <div className="text-warning">★★★★☆</div>
                  </div>
                </div>
                <p className="text-muted mb-0">
                  "Great variety of products and the quality is amazing. Customer support is very responsive. Occasionally had minor delays but overall a fantastic experience!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
