// navbar.component.ts
// Navigation bar - top मध्ये दिसतो
// scroll केल्यावर background बदलतो

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled" [class.menu-open]="menuOpen">
      <div class="nav-container">
        <!-- Logo -->
        <a class="logo" href="#home">
          <span class="logo-bracket">&lt;</span>
          BP
          <span class="logo-bracket">/&gt;</span>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links" [class.open]="menuOpen">
          <li *ngFor="let item of navItems; let i = index">
            <a [href]="item.link"
               (click)="closeMenu()"
               [style.animation-delay]="(i * 0.1) + 's'"
               >
              <span class="nav-num">0{{i+1}}.</span>
              {{item.label}}
            </a>
          </li>
          <li>
            <a href="assets/Bhushan_Powar_Resume.pdf"
               download
               class="resume-btn"
               (click)="closeMenu()">
              Resume
            </a>
          </li>
        </ul>

        <!-- Hamburger Menu (Mobile साठी) -->
        <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;
    }

    nav.scrolled {
      background: rgba(8, 11, 20, 0.95);
      padding: 14px 0;
      border-bottom: 1px solid rgba(0, 245, 212, 0.1);
      backdrop-filter: blur(10px);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: 'Space Mono', monospace;
      font-size: 1.4rem;
      font-weight: 700;
      color: #e2e8f0;
      text-decoration: none;
      letter-spacing: 2px;
      transition: color 0.3s;

      &:hover { color: #00f5d4; }

      .logo-bracket {
        color: #00f5d4;
        font-size: 1.2rem;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 40px;
      list-style: none;

      a {
        font-family: 'Space Mono', monospace;
        font-size: 0.82rem;
        color: #94a3b8;
        text-decoration: none;
        transition: color 0.3s;
        letter-spacing: 0.5px;

        &:hover { color: #00f5d4; }

        .nav-num {
          color: #00f5d4;
          margin-right: 4px;
          font-size: 0.75rem;
        }
      }

      .resume-btn {
        padding: 8px 20px;
        border: 1.5px solid #00f5d4;
        color: #00f5d4 !important;
        clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        transition: all 0.3s !important;

        &:hover {
          background: #00f5d4;
          color: #080b14 !important;
        }
      }
    }

    /* Hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      z-index: 1001;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: #00f5d4;
        transition: all 0.3s ease;
        transform-origin: center;
      }

      &.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      &.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

    /* Mobile responsive */
    @media (max-width: 768px) {
      .hamburger { display: flex; }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        height: 100vh;
        background: #0d1220;
        flex-direction: column;
        justify-content: center;
        padding: 60px 40px;
        gap: 30px;
        border-left: 1px solid rgba(0, 245, 212, 0.15);
        transition: right 0.4s ease;

        &.open { right: 0; }

        a { font-size: 1.1rem; }
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;

  navItems = [
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  ngOnInit() {}

  // Window scroll track करतो - scroll केल्यावर navbar बदलतो
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}