import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>NA Contraction</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <a href="#contact"><button className="btn">Get In Touch</button></a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Building Your Dreams To Reality</h1>
        <p>Professional NA Construction & JCB Services</p>
        <div className="hero-btns">
          <a href="#contact"><button className="btn">Book Now</button></a>
          <button className="btn outline">View Work</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">⏱ On Time Delivery</div>
        <div className="card">✔ ISO Certified</div>
        <div className="card">🏗 Premium Materials</div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
        <div>
          <h2>Trusted NA Construction Partner</h2>
          <p>We provide reliable building, road and JCB construction services.</p>
          <ul>
            <li>✔ Residential & Commercial</li>
            <li>✔ Road Construction</li>
            <li>✔ JCB Excavation</li>
            <li>✔ Renovation</li>
          </ul>
        </div>
      </section>
      

      {/* SERVICES */}
      <section className="services">
        <h2>Our NA Construction Services</h2>

        <div className="service-grid">
          <div className="service">
            <img src="https://t3.ftcdn.net/jpg/16/34/34/16/360_F_1634341673_aY37OBTX8AWoOHFQEhy3EI1eBj1MeNO0.jpg" />
            <h4>JCB Excavation</h4>
          </div>

          <div className="service">
            <img src="https://t3.ftcdn.net/jpg/09/89/25/14/360_F_989251404_aqQRi6zrKX30s3M69ZecK5sKKZKimiEn.jpg" />
            <h4>Road Construction</h4>
          </div>

          <div className="service">
            <img src="https://as2.ftcdn.net/v2/jpg/02/92/28/03/1000_F_292280346_jhRZyIQx3aWllg5CGeRZPSKRKkZBe1ND.jpg" />
            <h4>Building Construction</h4>
          </div>

          <div className="service">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
            <h4>Commercial Projects</h4>
          </div>

          <div className="service">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" />
            <h4>Site Development</h4>
          </div>

          <div className="service">
            <img src="https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307734.jpg?semt=ais_hybrid&w=740&q=80" />
            <h4>Heavy Machinery Work</h4>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="contact">
        <h2>Book Now / Contact Us</h2>

        <form action="nacontarction@gmail.com" method="POST" encType="text/plain">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Mobile Number" required />
          <textarea placeholder="Project Details" required></textarea>
          <button className="btn">Send Gmail</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 NA Construction | Call: +91 9528754252</p>
      </footer>

    </div>
  );
}
