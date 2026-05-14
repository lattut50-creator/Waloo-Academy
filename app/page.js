 "use client";
import React from 'react';
import { BookOpen, Users, Award, Mail, MapPin } from 'lucide-react';

export default function WalooAcademy() {
  const telegramLink = "https://t.me/Latusaid";
  const profileImageUrl = "/profile.png";

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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Waloo Academy</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#courses" className="hover:text-blue-200">Koorsiiwwan</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-white py-16 px-4 text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4">Waloo Academy</h2>
        <p className="text-xl text-slate-600 mb-8">Bakka Beekumsaa fi Kalaqaa!</p>
        <img 
          src={profileImageUrl} 
          alt="Profile" 
          className="mx-auto w-64 h-auto rounded-2xl shadow-xl border-4 border-white mb-8"
          onError={(e) => { e.target.src = "https://via.placeholder.com/400"; }}
        />
        <br />
        <a href="#courses" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700">
          Barachuu Jalqabi
        </a>
      </header>

      {/* Courses */}
      <section id="courses" className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center">
              <div className="flex justify-center mb-4">{course.icon}</div>
              <h4 className="text-xl font-bold mb-2">{course.title}</h4>
              <p className="text-slate-600 mb-6">{course.description}</p>
              
              {/* BUTTON KALLATTIIN TELEGRAM-TIITTI GEESSU */}
              <a 
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Amma Galmaa'i
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Nu Quunnamaa</h3>
          <div className="flex justify-center space-x-6 text-slate-300 mb-6">
            <span className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> Addis Ababa (AAU)</span>
            <span className="flex items-center"><Mail className="mr-2 w-4 h-4" /> @Latusaid</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Waloo Academy. Developed by Rorisa.</p>
        </div>
      </footer>
    </div>
  );
}
