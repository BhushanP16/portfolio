// projects.component.ts
// Projects section - तुमचे 3 मुख्य projects cards मध्ये

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured <span>Projects</span></h2>
          <div class="section-line"></div>
        </div>

        <div class="projects-grid">
          <div class="project-card"
               *ngFor="let project of projects; let i = index"
               [class.featured]="project.featured">

            <!-- Card Header -->
            <div class="card-header">
              <div class="project-icon">{{ project.icon }}</div>
              <div class="card-links">
                <a *ngIf="project.github"
                   [href]="project.github"
                   target="_blank"
                   title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a *ngIf="project.live"
                   [href]="project.live"
                   target="_blank"
                   title="Live Demo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" width="18" height="18">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Project Info -->
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>

            <!-- Key Features -->
            <ul class="project-features">
              <li *ngFor="let feat of project.features">{{ feat }}</li>
            </ul>

            <!-- Tech Tags -->
            <div class="tech-tags">
              <span class="tag" *ngFor="let tech of project.techs">{{ tech }}</span>
            </div>
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 24px;
    }

    .project-card {
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 2px;
        background: transparent;
        transition: background 0.3s;
      }

      &:hover {
        border-color: rgba(0,245,212,0.3);
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        &::before { background: #00f5d4; }
      }

      &.featured {
        border-color: rgba(0,245,212,0.25);
        &::before { background: #00f5d4; }
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .project-icon { font-size: 2rem; }

    .card-links {
      display: flex;
      gap: 14px;

      a {
        color: #64748b;
        transition: all 0.3s;
        text-decoration: none;

        &:hover {
          color: #00f5d4;
          transform: translateY(-2px);
        }
      }
    }

    .project-name {
      font-family: 'Syne', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: #e2e8f0;
    }

    .project-desc {
      font-size: 0.9rem;
      color: #94a3b8;
      line-height: 1.7;
      flex: 1;
    }

    .project-features {
      padding-left: 16px;

      li {
        font-size: 0.82rem;
        color: #64748b;
        line-height: 1.7;
        margin-bottom: 2px;

        &::marker { color: #00f5d4; }
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(0,245,212,0.08);
    }

    .tag {
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      padding: 4px 10px;
      background: rgba(0,245,212,0.06);
      border: 1px solid rgba(0,245,212,0.15);
      color: #00f5d4;
      letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      icon: '🏠',
      name: 'Real Estate Web Platform',
      featured: true,
      description: 'A full-stack real estate platform with property listings, advanced search, seller/buyer dashboards, and personalized user experience.',
      features: [
        'JWT-based auth with role-based access (seller/buyer)',
        'Advanced search: keyword, location, price range, amenities',
        'Lazy loading, code splitting, debounced search, API caching',
        'Separate dashboards for sellers and buyers',
      ],
      techs: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MySQL', 'Material-UI'],
      github: '',
      live: '',
    },
    {
      icon: '💪',
      name: 'Gym Management System',
      featured: false,
      description: 'Backend-heavy system for gym operations — membership, billing, attendance, and role-based admin/trainer modules.',
      features: [
        'Authentication + Role-based access control (admin/trainer)',
        'Membership management & billing APIs',
        'Attendance tracking module',
        'Normalized MySQL schema with CRUD endpoints',
      ],
      techs: ['Node.js', 'LoopBack 4', 'MySQL', 'React.js'],
      github: '',
      live: '',
    },
    {
      icon: '🏭',
      name: 'Industrial Website Platform',
      featured: false,
      description: 'Modular server-side APIs with authentication, access control, and optimized SQL logic for listing and search pages.',
      features: [
        'Modular Express.js APIs with auth & access control',
        'Optimized SQL logic for product listings and search',
        'API-driven React UI with Material-UI components',
        'Redux patterns & React Query for state management',
      ],
      techs: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'Material-UI', 'React Query'],
      github: '',
      live: '',
    },
  ];
}