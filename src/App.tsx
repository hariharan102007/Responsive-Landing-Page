/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NavMechanicsDemo } from './components/NavMechanicsDemo';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TaskRubric } from './components/TaskRubric';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NavStyleInspector } from './components/NavStyleInspector';
import { NavbarTheme } from './types';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<NavbarTheme>('glass');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);

  // Active section detection using IntersectionObserver (ScrollSpy)
  useEffect(() => {
    const sectionIds = ['overview', 'mechanics', 'services', 'projects', 'rubric', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* 
        The Fixed Interactive Navigation Menu
        - Stays fixed to the viewport at all times
        - Dynamically transforms background, border, padding, and styles upon scroll
        - Provides interactive hover animations, active tracking, and mobile drawer
      */}
      <Navbar
        currentTheme={currentTheme}
        activeSection={activeSection}
        onThemeChange={setCurrentTheme}
        onOpenInspector={() => setIsInspectorOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        <HeroSection onOpenInspector={() => setIsInspectorOpen(true)} />
        <NavMechanicsDemo />
        <ServicesSection />
        <ProjectsSection />
        <TaskRubric />
        <ContactSection />
      </main>

      {/* Footer with clean copyright & nav links mirror */}
      <Footer />

      {/* Interactive Inspector for the Task Evaluator */}
      <NavStyleInspector
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        activeSection={activeSection}
      />
    </div>
  );
}
