 "use client";
import { useState } from 'react';

// Suuraa kee folder 'public/' keessa 'profile.png' maqaa jedhuun galchi
const profileImageUrl = "/profile.png"; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Data Koorsiiwwanii
  const courses = [
    { 
      id: 1, 
      title: "Economics", 
      desc: "Madaala gabaa baradhu.", 
      detail: "Koorsii kana keessatti Microeconomics, Macroeconomics fi qulqullina gabaa Itiyoophiyaa gadi fageenyaan barattu.",
      teacher: "Rorisa (AAU Student)",
      price: "Bilisa"
    },
    { 
      id: 2, 
      title: "Data Analysis", 
      desc: "Excel fi Power BI baradhu.", 
      detail: "Dootaa akkamitti akka qulqulleessinu, qorannoo itti hojjennu fi dashboard miidhagaa ijaarru barattu.",
      teacher: "Waloo Tech Team",
      price: "1000 ETB"
    },
    { 
      id: 3, 
      title: "Programming", 
      desc: "JavaScript fi Next.js baradhu.", 
      detail: "Full-stack web development jalqabaa hanga dhumaatti, Next.js fi Tailwind CSS fayyadamuun barattu.",
      teacher: "Waloo Tech Team",
      price: "1500 ETB"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      
      {/* CSS Styles - TOKKO ILLEE HIN HIR'IFNE */}
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
        
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; }
        .modal-content { background: white; padding: 40px; border-radius: 20px; max-width: 500px; width: 90%; position: relative; text-align: left; }

        @media (max-width: 768px) {
          .nav-links { display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 65px; left: 0; width: 100%; background-color: #1a73e8; padding: 20px; gap: 15px; }
          .menu-icon { display: block !important; }
          .side-by-side-container { flex-direction: column !important; align-items: center !important; }
          .side-box { width: 95% !important; min-width: unset !important; }
        }
      `}</style>

      {/* 1. Nav Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 50px', backgroundColor: '#1a73e8', color: 'white', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0 }}>Waloo Academy</h2>
        <div className="menu-icon" style={{ display: 'none', fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</div>
        <div className="nav-links" style={{ display: 'flex', gap: '25px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a href="#courses" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Koorsiiwwan</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Waa'ee Keenya</a>
          <a href="#bottom-section" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Nu Quunnamuuf</a>
        </div>
      </nav>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 20px', textAlign: 'center' }}>
        
        {/* 2. Hero Section */}
        <h1 style={{ color: '#1a73e8', fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Waloo Academy</h1>
        <p style={{ fontSize: '1.5rem', color: '#555', marginBottom: '30px', fontWeight: '500' }}>Bakka Beekumsaa fi Kalaqaa!</p>
        <div style={{ marginBottom: '40px' }}>
          <img src={profileImageUrl} alt="Waloo Academy Profile" style={{ width: '100%', maxWidth: '700px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }} />
        </div>
        <button className="hero-btn" style={{ padding: '18px 50px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '40px', fontSize: '1.3rem', cursor: 'pointer', fontWeight: 'bold', marginBottom: '80px', boxShadow: '0 8px 20px rgba(26,115,232,0.3)' }}>Barachuu Jalqabi!</button>

        {/* 3. Maaliif Nu Filattu? */}
        <div id="about" style={{ marginBottom: '100px', width: '100%', maxWidth: '1000px', paddingTop: '70px' }}>
          <h2 style={{ color: '#1a73e8', marginBottom: '45px', fontSize: '2.2rem' }}>Maaliif Nu Filattu?</h2>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
                <h4 style={{ color: '#1a73e8' }}>Barsiisota Beekamoo</h4>
                <p>Namoota muuxannoo qabaniin baradhu.</p>
             </div>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💻</div>
                <h4 style={{ color: '#1a73e8' }}>Hojii Qabatamaa</h4>
                <p>Ti'oorii qofa osoo hin taane hojiin baradhu.</p>
             </div>
             <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '20px', width: '280px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📜</div>
                <h4 style={{ color: '#1a73e8' }}>Waraqaa Ragaa</h4>
                <p>Xumura irratti sertifikeetii fudhadhu.</p>
             </div>
          </div>
        </div>

        {/* 4. Koorsiiwwan (With Modal) */}
        <div id="courses" style={{ paddingTop: '70px', marginBottom: '100px' }}>
          <h2 style={{ color: '#1a73e8', marginBottom: '40px', fontSize: '2.2rem' }}>Koorsiiwwan Keenya</h2>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1100px' }}>
            {courses.map(course => (
              <div key={course.id} className="course-card" onClick={() => setSelectedCourse(course)}>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <span style={{ color: '#1a73e8', fontWeight: 'bold', fontSize: '0.8rem' }}>Detaayila ilaali →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Selection */}
        {selectedCourse && (
          <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedCourse(null)} style={{ position: 'absolute', top: '15px', right: '20px', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
              <h2 style={{ color: '#1a73e8' }}>{selectedCourse.title}</h2>
              <p style={{ color: '#444', margin: '20px 0' }}>{selectedCourse.detail}</p>
              <div style={{ backgroundColor: '#f0f2f5', padding: '15px', borderRadius: '10px' }}>
                <p><strong>Barsiisaa:</strong> {selectedCourse.teacher}</p>
                <p><strong>Gatii:</strong> {selectedCourse.price}</p>
              </div>
              <button style={{ width: '100%', marginTop: '20px', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Amma Galmaa'i</button>
            </div>
          </div>
        )}

        {/* 5. Yaada Barattoota Keenyaa - DEEBI'EE DABALAMEERA! */}
        <div style={{ width: '100vw', padding: '60px 20px', marginBottom: '80px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
           <h2 style={{ color: '#1a73e8', marginBottom: '50px', fontSize: '2.2rem' }}>Yaada Barattoota Keenyaa</h2>
           <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div className="testimonial-card">
                 <p style={{ fontSize: '1.1rem', color: '#444' }}>"Waloo Academy barnoota haala salphaan akka naaf galu na gargaareera. Gidduu-galessa beekumsaa dhugaati!"</p>
                 <h5 style={{ marginTop: '20px', color: '#1a73e8', fontSize: '1.1rem' }}>— Ayyaantuu G.</h5>
              </div>
              <div className="testimonial-card">
                 <p style={{ fontSize: '1.1rem', color: '#444' }}>"Programming barachuun natti ulfaata ture, amma garuu ofitti amanamummaan koodii barreessaa jira."</p>
                 <h5 style={{ marginTop: '20px', color: '#1a73e8', fontSize: '1.1rem' }}>— Abdii K.</h5>
              </div>
           </div>
        </div>

        {/* 6 & 7. Newsletter & Contact (Side-by-Side) */}
        <div id="bottom-section" className="side-by-side-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', maxWidth: '1000px', marginBottom: '80px', padding: '0 10px' }}>
          <div className="side-box" style={{ flex: 1, backgroundColor: '#1e293b', color: 'white', padding: '25px', borderRadius: '20px', minWidth: '320px' }}>
            <h3 style={{ color: '#1a73e8', marginBottom: '10px' }}>Oduu Haaraa Argaachuuf!</h3>
            <p style={{ fontSize: '0.8rem', opacity: '0.8', marginBottom: '20px' }}>Koorsiiwwan haaraaf asitti galmaa'aa.</p>
            <input type="email" placeholder="Email..." style={{ width: '100%', padding: '12px', borderRadius: '25px', border: 'none', marginBottom: '15px' }} />
            <button style={{ width: '100%', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold' }}>Galmaa'i</button>
          </div>
          <div className="side-box" style={{ flex: 1, backgroundColor: '#e3f2fd', padding: '25px', borderRadius: '20px', minWidth: '320px' }}>
            <h3 style={{ color: '#1a73e8', marginBottom: '10px' }}>Nu Quunnamuuf</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Ergaan keessan ergamaa jira...'); }}>
              <input type="text" placeholder="Maqaa" className="form-input" style={{ borderRadius: '20px' }} required />
              <textarea placeholder="Ergaa..." className="form-input" style={{ minHeight: '60px', borderRadius: '15px' }} required></textarea>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#1a73e8', color: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold' }}>Ergi</button>
            </form>
          </div>
        </div>

      </main>

      <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>Waloo Academy</h3>
        <p>© 2026 Waloo Academy. Bakka Beekumsaa fi Kalaqaa!</p>
      </footer>
    </div>
  );
}
