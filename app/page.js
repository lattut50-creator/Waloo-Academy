 "use client";
import React, { useState } from 'react';
import { BookOpen, Users, Award, Menu, X, Mail, MapPin } from 'lucide-react';

const WalooAcademy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Economics for Beginners",
      description: "Bu'uura diinagdee fi yaada madaala gabaa salphaatti bari.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "Data Analysis with Excel",
      description: "Oofisa keessatti akkamitti data xiinxaluun akka danda'amu baradhu.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Programming Basics",
      description: "Koodii barreessuu jalqabuuf bu'uura Python fi JavaScript.",
      icon: <Award className="w-8 h-8 text-blue-600" />,
    }
  ];

  const profileImageUrl = "/profile.png";
  // Linkii Telegram kee kan @Latusaid asitti hidhameera
  const telegramLink = "https://t.me/Latusaid";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Waloo Academy</h1>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition">Home</a>
            <a href="#courses" className="hover:text-blue-200 transition">Koorsiiwwan</a>
            <a href="#about" className="hover:text-blue-200 transition">Waa'ee Keenya</a>
            <a href="#contact" className="hover:text-blue-200 transition">Nu Quunnamuuf</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-16 px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4">Waloo Academy</h2>
          <p className="text-xl text-slate-600 mb-8">Bakka Beekumsaa fi Kalaqaa!</p>
          
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={profileImageUrl} 
              alt="Waloo Academy Profile" 
              className="relative w-80 h-auto rounded-2xl shadow-2xl border-4 border-white object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </div>
          
          <div className="block">
            <a 
              href="#courses" 
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl inline-block"
            >
              Barachuu Jalqabi!
            </a>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">Koorsiiwwan Keenya</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {course.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{course.title}</h4>
              <p className="text-slate-600 mb-6">{course.description}</p>
              
              {/* BUTTON KALLATTIIN GARA TELEGRAM-TIITTI SI FIDU */}
              <a 
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Amma Galmaa'i
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nu Quunnamaa</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="text-blue-400" />
                <span>Addis Ababa, Ethiopia (AAU)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="text-blue-400" />
                <span>info@walooacademy.com</span>
              </div>
            </div>
          </div>
          <div className="text-slate-400 text-sm">
            © 2026 Waloo Academy. All rights reserved. <br />
            Developed with Passion for Education by Rorisa.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WalooAcademy;
