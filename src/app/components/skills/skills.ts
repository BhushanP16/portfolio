// skills.component.ts
// Skills section - animated progress bars + tech grid

import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical <span>Skills</span></h2>
          <div class="section-line"></div>
        </div>

        <!-- Skill Categories -->
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let cat of skillCategories">
            <h3 class="cat-title">
              <span class="cat-icon">{{ cat.icon }}</span>
              {{ cat.name }}
            </h3>

            <div class="skill-bars">
              <div class="skill-bar-item"
                   *ngFor="let skill of cat.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill"
                       [style.width]="animated ? skill.level + '%' : '0%'"
                       [style.background]="skill.color || '#00f5d4'">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Bubbles -->
        <div class="tech-stack">
          <p class="intro-tag"><span>//</span> Full Tech Stack</p>
          <div class="tech-bubbles">
            <span class="tech-bubble"
                  *ngFor="let tech of allTechs"
                  [class]="'level-' + tech.level">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { padding: 100px 0; }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .section-header { margin-bottom: 60px; }

    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #e2e8f0;
      margin-bottom: 14px;
      span { color: #00f5d4; }
    }

    .section-line {
      width: 60px; height: 3px;
      background: #00f5d4;
      box-shadow: 0 0 12px #00f5d4;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-bottom: 60px;
    }

    .skill-category {
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
      padding: 30px;
      transition: border-color 0.3s, transform 0.3s;

      &:hover {
        border-color: rgba(0,245,212,0.3);
        transform: translateY(-4px);
      }
    }

    .cat-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(0,245,212,0.1);

      .cat-icon { font-size: 1.2rem; }
    }

    .skill-bars { display: flex; flex-direction: column; gap: 16px; }

    .skill-bar-item {}

    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .skill-name {
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      color: #94a3b8;
    }

    .skill-level {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      color: #00f5d4;
    }

    .bar-track {
      height: 4px;
      background: rgba(255,255,255,0.05);
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 8px currentColor;
    }

    /* Tech Bubbles */
    .tech-stack { margin-top: 20px; }

    .intro-tag {
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;
      color: #00f5d4;
      margin-bottom: 24px;
      span { margin-right: 6px; opacity: 0.5; }
    }

    .tech-bubbles {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .tech-bubble {
      padding: 8px 18px;
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.5px;
      cursor: default;
      transition: all 0.3s;

      &.level-high {
        background: rgba(0,245,212,0.08);
        border: 1px solid rgba(0,245,212,0.3);
        color: #00f5d4;
      }

      &.level-mid {
        background: rgba(124,58,237,0.08);
        border: 1px solid rgba(124,58,237,0.3);
        color: #a78bfa;
      }

      &.level-basic {
        background: rgba(148,163,184,0.05);
        border: 1px solid rgba(148,163,184,0.15);
        color: #64748b;
      }

      &:hover { transform: translateY(-3px); filter: brightness(1.3); }
    }

    @media (max-width: 768px) {
      .skills-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class SkillsComponent implements AfterViewInit {
  animated = false;

  skillCategories = [
    {
      icon: '⚛️',
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 85, color: '#61dafb' },
        { name: 'Redux Toolkit', level: 80, color: '#764abc' },
        { name: 'Material-UI / Ant Design', level: 82, color: '#1976d2' },
        { name: 'HTML5 / CSS3', level: 90, color: '#e34f26' },
        { name: 'TypeScript', level: 65, color: '#3178c6' },
      ]
    },
    {
      icon: '⚙️',
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: '#68a063' },
        { name: 'Express.js', level: 85, color: '#00f5d4' },
        { name: 'LoopBack 4', level: 80, color: '#e8274b' },
        { name: 'REST API Design', level: 87, color: '#ff6b6b' },
        { name: 'JWT / Auth', level: 78, color: '#f7c948' },
      ]
    },
    {
      icon: '🗄️',
      name: 'Database',
      skills: [
        { name: 'MySQL', level: 85, color: '#4479a1' },
        { name: 'MongoDB', level: 65, color: '#47a248' },
        { name: 'Schema Design', level: 82, color: '#00f5d4' },
        { name: 'SQL Queries & Joins', level: 80, color: '#f7c948' },
      ]
    },
    {
      icon: '🚀',
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git / GitHub', level: 85, color: '#f05032' },
        { name: 'Docker (Basic)', level: 55, color: '#2496ed' },
        { name: 'PM2 / cPanel', level: 75, color: '#00f5d4' },
        { name: 'Postman', level: 90, color: '#ff6c37' },
      ]
    }
  ];

  allTechs = [
    { name: 'JavaScript (ES6+)', level: 'high' },
    { name: 'React.js', level: 'high' },
    { name: 'Node.js', level: 'high' },
    { name: 'Express.js', level: 'high' },
    { name: 'LoopBack 4', level: 'high' },
    { name: 'MySQL', level: 'high' },
    { name: 'Redux Toolkit', level: 'high' },
    { name: 'Material-UI', level: 'high' },
    { name: 'TypeScript', level: 'mid' },
    { name: 'MongoDB', level: 'mid' },
    { name: 'Docker', level: 'mid' },
    { name: 'PM2', level: 'mid' },
    { name: 'REST APIs', level: 'high' },
    { name: 'JWT Auth', level: 'high' },
    { name: 'Git', level: 'high' },
    { name: 'Postman', level: 'high' },
    { name: 'C / C++', level: 'basic' },
    { name: 'Java', level: 'basic' },
    { name: 'CI/CD Concepts', level: 'basic' },
    { name: 'AWS (Familiar)', level: 'basic' },
  ];

  // Intersection Observer - screen वर येतो तेव्हा animate होतो
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => { this.animated = true; }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);
  }
}