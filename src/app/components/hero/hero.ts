// hero.component.ts
// Portfolio चा पहिला section - Hero/Landing page
// TypeWriter effect, animated background dots

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <!-- Animated background grid -->
      <div class="bg-grid"></div>

      <!-- Floating glow orbs -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>

      <div class="hero-content">
        <p class="greeting">
          <span class="line"></span>
          Hello, World! 👋
        </p>

        <h1 class="name">Bhushan <span>Powar</span></h1>

        <h2 class="role">
          <span class="role-prefix">I build </span>
          <span class="typewriter">{{ currentText }}<span class="cursor">|</span></span>
        </h2>

        <p class="tagline">
          MERN Stack Developer — crafting scalable web apps with
          <strong>Node.js</strong>, <strong>React</strong> & <strong>LoopBack 4</strong>.
          Based in Kolhapur 🇮🇳
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn-primary">View My Work →</a>
          <a href="#contact" class="btn-outline">Get In Touch</a>
        </div>

        <!-- Social links -->
        <div class="social-links">
          <a href="https://linkedin.com/in/bhushanpowar16"
             target="_blank" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:bhushanpowar1999@gmail.com" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="tel:7522955959" title="Call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 7.36 7.36l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right side decoration -->
      <div class="hero-visual">
        <div class="code-card">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="file-name">bhushan.ts</span>
          </div>
          <div class="code-body">
            <pre><span class="c-purple">const</span> <span class="c-green">developer</span> = &#123;
  <span class="c-blue">name</span>: <span class="c-yellow">"Bhushan Powar"</span>,
  <span class="c-blue">role</span>: <span class="c-yellow">"MERN Stack Dev"</span>,
  <span class="c-blue">location</span>: <span class="c-yellow">"Kolhapur, IN"</span>,
  <span class="c-blue">skills</span>: [
    <span class="c-yellow">"React"</span>, <span class="c-yellow">"Node.js"</span>,
    <span class="c-yellow">"LoopBack 4"</span>, <span class="c-yellow">"MySQL"</span>
  ],
  <span class="c-blue">available</span>: <span class="c-purple">true</span> <span class="c-comment">// 🟢 Hiring!</span>
&#125;</pre>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 100px 24px 60px;
      max-width: 1200px;
      margin: 0 auto;
      gap: 60px;
    }

    /* Background Grid */
    .bg-grid {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: -1;
    }

    /* Glow orbs */
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      z-index: -1;
    }
    .orb-1 {
      width: 500px; height: 500px;
      background: rgba(124, 58, 237, 0.12);
      top: -100px; right: -100px;
    }
    .orb-2 {
      width: 400px; height: 400px;
      background: rgba(0, 245, 212, 0.08);
      bottom: 100px; left: -100px;
    }

    .hero-content {
      flex: 1;
      animation: fadeInUp 0.8s ease both;
    }

    .greeting {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Space Mono', monospace;
      font-size: 0.9rem;
      color: #00f5d4;
      margin-bottom: 20px;
      letter-spacing: 1px;
      animation: fadeInUp 0.6s 0.1s ease both;

      .line {
        display: inline-block;
        width: 40px;
        height: 1px;
        background: #00f5d4;
        box-shadow: 0 0 8px #00f5d4;
      }
    }

    .name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 800;
      color: #e2e8f0;
      line-height: 1.1;
      margin-bottom: 16px;
      animation: fadeInUp 0.6s 0.2s ease both;

      span { color: #00f5d4; }
    }

    .role {
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 600;
      color: #94a3b8;
      margin-bottom: 24px;
      animation: fadeInUp 0.6s 0.3s ease both;
    }

    .role-prefix { color: #64748b; }

    .typewriter {
      color: #e2e8f0;
      font-family: 'Space Mono', monospace;
    }

    .cursor {
      color: #00f5d4;
      animation: blink 1s infinite;
    }

    .tagline {
      font-size: 1rem;
      color: #64748b;
      max-width: 500px;
      margin-bottom: 40px;
      line-height: 1.8;
      animation: fadeInUp 0.6s 0.4s ease both;

      strong { color: #94a3b8; }
    }

    .hero-actions {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 50px;
      animation: fadeInUp 0.6s 0.5s ease both;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 32px;
      background: #00f5d4;
      border: none;
      color: #080b14;
      font-family: 'Space Mono', monospace;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      text-decoration: none;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      transition: all 0.3s;

      &:hover {
        background: transparent;
        color: #00f5d4;
        box-shadow: 0 0 30px rgba(0,245,212,0.3), inset 0 0 0 1.5px #00f5d4;
      }
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: transparent;
      border: 1.5px solid rgba(148,163,184,0.3);
      color: #94a3b8;
      font-family: 'Space Mono', monospace;
      font-size: 0.82rem;
      letter-spacing: 1px;
      text-decoration: none;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      transition: all 0.3s;

      &:hover {
        border-color: #00f5d4;
        color: #00f5d4;
      }
    }

    .social-links {
      display: flex;
      gap: 20px;
      animation: fadeInUp 0.6s 0.6s ease both;

      a {
        width: 44px; height: 44px;
        border: 1px solid rgba(0,245,212,0.2);
        display: flex; align-items: center; justify-content: center;
        color: #64748b;
        transition: all 0.3s;
        text-decoration: none;

        svg { width: 18px; height: 18px; }

        &:hover {
          border-color: #00f5d4;
          color: #00f5d4;
          background: rgba(0,245,212,0.05);
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(0,245,212,0.15);
        }
      }
    }

    /* Code Card */
    .hero-visual {
      flex: 0 0 420px;
      animation: fadeInUp 0.8s 0.3s ease both;
    }

    .code-card {
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.15);
      box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,245,212,0.05);
      animation: float 4s ease-in-out infinite;
    }

    .code-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(0,245,212,0.1);
      background: rgba(0,0,0,0.2);

      .dot {
        width: 12px; height: 12px;
        border-radius: 50%;
        &.red { background: #ff5f57; }
        &.yellow { background: #febc2e; }
        &.green { background: #28c840; }
      }

      .file-name {
        margin-left: 8px;
        font-family: 'Space Mono', monospace;
        font-size: 0.75rem;
        color: #64748b;
      }
    }

    .code-body {
      padding: 24px;

      pre {
        font-family: 'Space Mono', monospace;
        font-size: 0.78rem;
        line-height: 1.9;
        white-space: pre-wrap;
      }

      .c-purple { color: #c792ea; }
      .c-green { color: #00f5d4; }
      .c-blue { color: #82aaff; }
      .c-yellow { color: #f7c948; }
      .c-comment { color: #546e7a; font-style: italic; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
    @keyframes float {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    @media (max-width: 900px) {
      .hero { flex-direction: column; text-align: center; padding-top: 120px; }
      .greeting { justify-content: center; }
      .tagline { margin: 0 auto 40px; }
      .hero-actions { justify-content: center; }
      .social-links { justify-content: center; }
      .hero-visual { flex: none; width: 100%; max-width: 420px; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  // TypeWriter effect साठी
  texts = [
    'Full-Stack Apps.',
    'REST APIs.',
    'React UIs.',
    'Scalable Systems.',
    'Great Experiences.',
  ];

  currentText = '';
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  typeWriter() {
    const fullText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = fullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      speed = 2000; // पूर्ण text लिहिल्यावर थांबतो
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.typeWriter(), speed);
  }
}