// about.component.ts
// About section - तुमच्याबद्दल माहिती

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About <span>Me</span></h2>
          <div class="section-line"></div>
        </div>

        <div class="about-grid">
          <!-- Left: Text Info -->
          <div class="about-text">
            <p class="intro-tag">
              <span>//</span> Who I am
            </p>

            <p>
              I'm a <strong>MERN Stack Developer</strong> from Kolhapur, Maharashtra,
              currently working at <strong>Comptranse Technology Pvt. Ltd.</strong>
              I love building fast, clean, and user-friendly web applications from
              scratch — both frontend and backend.
            </p>

            <p>
              I completed my <strong>B.E. (2025)</strong> from Sanjeevan Engineering
              and Technology Institute, Kolhapur, and before that, a
              <strong>Diploma in Electronics & Telecom (2021)</strong> from
              New Polytechnic Kolhapur.
            </p>

            <p>
              When I'm not coding, I'm exploring new tech, improving my problem-solving
              skills, and building side projects that solve real problems.
            </p>

            <div class="quick-info">
              <div class="info-item" *ngFor="let info of quickInfo">
                <span class="info-icon">{{ info.icon }}</span>
                <div>
                  <span class="info-label">{{ info.label }}</span>
                  <span class="info-value">{{ info.value }}</span>
                </div>
              </div>
            </div>

            <a href="assets/Bhushan_Powar_Resume.pdf"
               download
               class="btn-download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <!-- Right: Experience Timeline -->
          <div class="about-timeline">
            <p class="intro-tag">
              <span>//</span> Experience
            </p>

            <div class="timeline">
              <div class="timeline-item" *ngFor="let exp of experience">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <span class="timeline-date">{{ exp.date }}</span>
                  <h3>{{ exp.role }}</h3>
                  <p class="company">{{ exp.company }}</p>
                  <ul>
                    <li *ngFor="let point of exp.points">{{ point }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 100px 0;
    }

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

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    .intro-tag {
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;
      color: #00f5d4;
      margin-bottom: 24px;
      letter-spacing: 1px;
      span { margin-right: 6px; opacity: 0.5; }
    }

    .about-text p {
      color: #94a3b8;
      line-height: 1.9;
      margin-bottom: 18px;
      font-size: 0.97rem;
      strong { color: #e2e8f0; }
    }

    .quick-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 32px 0;
      padding: 24px;
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 12px;

      .info-icon { font-size: 1.2rem; }

      .info-label {
        display: block;
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .info-value {
        display: block;
        font-size: 0.9rem;
        color: #e2e8f0;
        font-weight: 600;
        margin-top: 2px;
      }
    }

    .btn-download {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      background: transparent;
      border: 1.5px solid #00f5d4;
      color: #00f5d4;
      font-family: 'Space Mono', monospace;
      font-size: 0.82rem;
      letter-spacing: 1px;
      cursor: pointer;
      text-decoration: none;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      transition: all 0.3s;

      &:hover {
        background: #00f5d4;
        color: #080b14;
        box-shadow: 0 0 25px rgba(0,245,212,0.3);
      }
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 24px;

      &::before {
        content: '';
        position: absolute;
        left: 6px;
        top: 6px;
        bottom: 0;
        width: 1px;
        background: rgba(0,245,212,0.2);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;

      &:last-child { margin-bottom: 0; }
    }

    .timeline-dot {
      position: absolute;
      left: -22px;
      top: 6px;
      width: 12px; height: 12px;
      background: #00f5d4;
      border-radius: 50%;
      box-shadow: 0 0 10px #00f5d4;
    }

    .timeline-content {
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
      padding: 20px 24px;
      transition: border-color 0.3s;

      &:hover { border-color: rgba(0,245,212,0.3); }
    }

    .timeline-date {
      font-family: 'Space Mono', monospace;
      font-size: 0.72rem;
      color: #00f5d4;
      letter-spacing: 1px;
    }

    .timeline-content h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 6px 0 4px;
    }

    .company {
      font-size: 0.85rem;
      color: #64748b;
      margin-bottom: 12px !important;
    }

    .timeline-content ul {
      padding-left: 16px;
      li {
        color: #94a3b8;
        font-size: 0.85rem;
        line-height: 1.7;
        margin-bottom: 4px;
      }
    }

    @media (max-width: 768px) {
      .about-grid { grid-template-columns: 1fr; gap: 50px; }
      .quick-info { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent {
  quickInfo = [
    { icon: '📍', label: 'Location', value: 'Kolhapur, Maharashtra' },
    { icon: '💼', label: 'Experience', value: '1+ Year' },
    { icon: '🎓', label: 'Education', value: 'B.E. 2025' },
    { icon: '📧', label: 'Email', value: 'bhushanpowar1999@gmail.com' },
  ];

  experience = [
    {
      date: 'March 2025 – Present',
      role: 'MERN Stack Developer',
      company: 'Comptranse Technology Pvt. Ltd., Kolhapur',
      points: [
        'Built backend services using Node.js, Express.js & LoopBack 4',
        'Designed RESTful APIs with JWT auth & input validation',
        'Integrated React.js + Material-UI with backend APIs',
        'Managed deployments on cPanel with PM2',
      ]
    },
    {
      date: 'March 2024 – June 2024',
      role: 'Developer Intern',
      company: 'Exontric System Pvt. Ltd., Kolhapur',
      points: [
        'Developed UI components for MERN applications',
        'Tested REST APIs using Postman',
        'Participated in feature planning and code reviews',
      ]
    }
  ];
}