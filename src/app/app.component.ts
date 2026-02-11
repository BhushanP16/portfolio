// app.component.ts
// हे Angular चं सर्वात मुख्य component आहे
// सगळे components इथे import होतात

import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',         // index.html मध्ये <app-root> tag
  standalone: true,             // Angular 17+ मध्ये standalone वापरतात
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <footer class="footer">
      <p>Designed & Built by <span>Bhushan Powar</span> © 2026</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 30px;
      border-top: 1px solid rgba(0, 245, 212, 0.1);
      color: #64748b;
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;

      span {
        color: #00f5d4;
      }
    }
  `]
})
export class AppComponent {
  title = 'Bhushan Powar Portfolio';
}