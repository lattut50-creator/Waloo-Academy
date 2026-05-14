 "use client";
import { useState } from 'react';

// Place your image in 'public/' folder named 'profile.png'
const profileImageUrl = "/profile.png"; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Course Data
  const courses = [
    { 
      id: 1, 
      title: "Economics", 
      desc: "Learn market analysis.", 
      detail: "In this course, you will study Microeconomics, Macroeconomics, and Ethiopia's market dynamics in depth.",
      teacher: "Rorisa (AAU Student)",
      price: "Free"
    },
    { 
      id: 2, 
      title: "Data Analysis", 
      desc: "Learn Excel & Power BI.", 
      detail: "Learn how to clean data, perform analysis, and create beautiful dashboards.",
      teacher: "Waloo Tech Team",
      price: "1000 ETB"
    },
    { 
      id: 3, 
      title: "Programming", 
      desc: "Learn JavaScript & Next.js.", 
      detail: "Full-stack web development from start to finish using Next.js and Tailwind CSS.",
      teacher: "Waloo Tech Team",
      price: "1500 ETB"
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Subscribed with ${newsletterEmail}! You'll receive updates.`);
      setNewsletterEmail("");
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      
      {/* CSS Styles - DO NOT REMOVE ANYTHING */}
      <style jsx global>{`
        .course-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: white; padding: 25px; border-radius: 15px; width: 280px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: left; cursor: pointer;
        }
        .course-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); border: 1px solid #1a73e8; }
        .hero-btn { transition: background-color 0.3s, transform 0.2s; }
        .hero-btn:hover { background-color: #1557b0 !important; transform: scale(1.05); }
        .testimonial-card { background: white; padding: 25px; border-radius: 15px; width: 320px; font-style: italic; border-left: 6px solid #1a73e8; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .form-input { width: 100%; padding: 10px; margin-bottom: 12px; border-radius: 8px; border: 1px solid #ddd; outline: none; font-size: 0.9rem; }
        .form-input:focus { border-color: #1a73e8; box-shadow: 0 0 0 2px rgba(26,115,232,0.2); }
        
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; animation: fadeIn 0.3s ease; }
        .modal-content { background: white; padding: 40px; border-radius: 20px; max-width: 500px; width: 90%; position: relative; text-align: left; animation: slideUp 0.3s ease; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 768px) {
          .nav-links { display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 65px; left: 0; width: 100%; background-color: #1a73e8; padding: 20px; gap: 15px; }
          .menu-icon { display: block !important; }
          .side-by-side-container { flex-direction: column !important; align-items: center !important; }
          .side-box { width: 95% !important; min-width: unset !important; }
        }
      `}</style>

      {/* 1. Nav Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 50px', backgroundColor: '#1a73e8', color: 'white', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Waloo Academy</h2>
        <div className="menu-icon" style={{ display: 'none', fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</div>
        <div className="nav-links" style={{ display: 'flex', gap: '25px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a href="#courses" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Courses</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About Us</a>
          <a href="#bottom-section" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</a>
        </div>
      </nav>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 20px', textAlign: 'center' }}>
        
        {/* 2. Hero Section */}
        <h1 style={{ color: '#1a73e8', fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Waloo Academy</h1>
        <p style={{ fontSize: '1.5rem', color: '#555', marginBottom: '30px', fontWeight: '500' }}>Where Knowledge Meets Innovation!</p>
        <div style={{ marginBottom: '40px' }}>
          <img src={profileImageUrl} alt="Waloo Academy Profile" style={{ width: '100%', maxWidth: '700px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }} />
        </div>
        <button className="hero-btn" style={{ padding: '18px 50px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '40px', fontSize: '1.3rem', cursor: 'pointer', fontWeight: 'bold', marginBottom: '80px', boxShadow: '0 8px 20px rgba(26,115,232,0.3)' }} onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
          Start Learning!
        </button>

        {/* 3. Why Choose Us? */}
        <div id="about" style={{ marginBottom: '100px', width: '100%', maxWidth: '1000px', paddingTop: '70px' }}>
          <h2 style={{ color: '#1a73e8', marginBottom: '45px', fontSize: '2.2rem' }}>Why Choose Us?</h2>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
                <h4 style={{ color: '#1a73e8' }}>Expert Instructors</h4>
                <p>Learn from experienced professionals.</p>
             </div>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💻</div>
                <h4 style={{ color: '#1a73e8' }}>Hands-on Projects</h4>
                <p>Learn by doing, not just theory.</p>
             </div>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📜</div>
                <h4 style={{ color: '#1a73e8' }}>Certificate</h4>
                <p>Receive a certificate upon completion.</p>
             </div>
          </div>
        </div>

        {/* 4. Our Courses (With Modal) */}
        <div id="courses" style={{ paddingTop: '70px', marginBottom: '100px' }}>
          <h2 style={{ color: '#1a73e8', marginBottom: '40px', fontSize: '2.2rem' }}>Our Courses</h2>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1100px' }}>
            {courses.map(course => (
              <div key={course.id} className="course-card" onClick={() => setSelectedCourse(course)}>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <span style={{ color: '#1a73e8', fontWeight: 'bold', fontSize: '0.8rem' }}>View details →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Selection */}
        {selectedCourse && (
          <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedCourse(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}>✕</button>
              <h2 style={{ color: '#1a73e8' }}>{selectedCourse.title}</h2>
              <p style={{ color: '#444', margin: '20px 0' }}>{selectedCourse.detail}</p>
              <div style={{ backgroundColor: '#f0f2f5', padding: '15px', borderRadius: '10px' }}>
                <p><strong>Instructor:</strong> {selectedCourse.teacher}</p>
                <p><strong>Price:</strong> {selectedCourse.price}</p>
              </div>
              <button style={{ width: '100%', marginTop: '20px', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => { alert(`Enrollment started for ${selectedCourse.title}!`); setSelectedCourse(null); }}>
                Enroll Now
              </button>
            </div>
          </div>
        )}

        {/* 5. Student Testimonials - ADDED BACK! */}
        <div style={{ width: '100vw', padding: '60px 20px', marginBottom: '80px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
           <h2 style={{ color: '#1a73e8', marginBottom: '50px', fontSize: '2.2rem' }}>What Our Students Say</h2>
           <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div className="testimonial-card">
                 <p style={{ fontSize: '1.1rem', color: '#444' }}>"Waloo Academy made learning easy for me. It's truly a center of knowledge!"</p>
                 <h5 style={{ marginTop: '20px', color: '#1a73e8', fontSize: '1.1rem' }}>— Ayantu G.</h5>
              </div>
              <div className="testimonial-card">
                 <p style={{ fontSize: '1.1rem', color: '#444' }}>"Programming was hard for me, but now I write code with confidence."</p>
                 <h5 style={{ marginTop: '20px', color: '#1a73e8', fontSize: '1.1rem' }}>— Abdi K.</h5>
              </div>
           </div>
        </div>

        {/* 6 & 7. Newsletter & Contact (Side-by-Side) */}
        <div id="bottom-section" className="side-by-side-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', maxWidth: '1000px', marginBottom: '80px', padding: '0 10px' }}>
          <div className="side-box" style={{ flex: 1, backgroundColor: '#1e293b', color: 'white', padding: '25px', borderRadius: '20px', minWidth: '320px' }}>
            <h3 style={{ color: '#1a73e8', marginBottom: '10px' }}>Get Latest Updates!</h3>
            <p style={{ fontSize: '0.8rem', opacity: '0.8', marginBottom: '20px' }}>Subscribe for new courses and offers.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email..." 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '25px', border: 'none', marginBottom: '15px', outline: 'none' }} 
                required
              />
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
                Subscribe
              </button>
            </form>
          </div>
          <div className="side-box" style={{ flex: 1, backgroundColor: '#e3f2fd', padding: '25px', borderRadius: '20px', minWidth: '320px' }}>
            <h3 style={{ color: '#1a73e8', marginBottom: '10px' }}>Contact Us</h3>
            {submitted && <p style={{ color: 'green', fontSize: '0.9rem', marginBottom: '10px' }}>✓ Message sent successfully!</p>}
            <form onSubmit={handleContactSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="form-input" 
                style={{ borderRadius: '20px' }} 
                required 
              />
              <textarea 
                placeholder="Your Message..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="form-input" 
                style={{ minHeight: '60px', borderRadius: '15px' }}
                required
              ></textarea>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

      </main>

      <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>Waloo Academy</h3>
        <p>© 2026 Waloo Academy. Where Knowledge Meets Innovation!</p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>Home</a>
          <a href="#courses" style={{ color: '#1a73e8', textDecoration: 'none' }}>Courses</a>
          <a href="#about" style={{ color: '#1a73e8', textDecoration: 'none' }}>About</a>
        </div>
      </footer>
    </div>
  );
}
