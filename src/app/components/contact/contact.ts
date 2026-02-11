// contact.component.ts
// Contact section - form + social info

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Angular forms साठी import

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In <span>Touch</span></h2>
          <div class="section-line"></div>
        </div>

        <div class="contact-grid">
          <!-- Left: Info -->
          <div class="contact-info">
            <p class="intro-tag"><span>//</span> Let's work together</p>

            <p class="contact-text">
              I'm currently <strong>open to new opportunities</strong> and exciting projects.
              Whether you have a job offer, freelance project, or just want to say hi —
              feel free to reach out! I'll try my best to respond quickly.
            </p>

            <div class="contact-items">
              <a class="contact-item" href="mailto:bhushanpowar1999@gmail.com">
                <div class="item-icon">✉️</div>
                <div>
                  <span class="item-label">Email</span>
                  <span class="item-value">bhushanpowar1999&#64;gmail.com</span>
                </div>
              </a>
              <a class="contact-item" href="tel:7522955959">
                <div class="item-icon">📱</div>
                <div>
                  <span class="item-label">Phone</span>
                  <span class="item-value">+91 75229 55959</span>
                </div>
              </a>
              <a class="contact-item"
                 href="https://linkedin.com/in/bhushanpowar16"
                 target="_blank">
                <div class="item-icon">💼</div>
                <div>
                  <span class="item-label">LinkedIn</span>
                  <span class="item-value">linkedin.com/in/bhushanpowar16</span>
                </div>
              </a>
              <div class="contact-item">
                <div class="item-icon">📍</div>
                <div>
                  <span class="item-label">Location</span>
                  <span class="item-value">Kolhapur, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <!-- Availability badge -->
            <div class="availability">
              <span class="dot-pulse"></span>
              Available for opportunities
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="contact-form-wrapper">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  #nameField="ngModel">
                <span class="error" *ngIf="nameField.invalid && nameField.touched">
                  Name required!
                </span>
              </div>

              <div class="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  #emailField="ngModel">
                <span class="error" *ngIf="emailField.invalid && emailField.touched">
                  Valid email required!
                </span>
              </div>

              <div class="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry / Job offer"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  name="message"
                  rows="5"
                  [(ngModel)]="formData.message"
                  required
                  #msgField="ngModel">
                </textarea>
                <span class="error" *ngIf="msgField.invalid && msgField.touched">
                  Please write a message!
                </span>
              </div>

              <button type="submit"
                      class="submit-btn"
                      [disabled]="contactForm.invalid || isSending">
                <span *ngIf="!isSending && !isSent">
                  Send Message →
                </span>
                <span *ngIf="isSending">Sending...</span>
                <span *ngIf="isSent">✅ Message Sent!</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { padding: 100px 0 60px; }

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

    .contact-grid {
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
      span { margin-right: 6px; opacity: 0.5; }
    }

    .contact-text {
      color: #94a3b8;
      line-height: 1.9;
      margin-bottom: 36px;
      font-size: 0.97rem;
      strong { color: #e2e8f0; }
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 36px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        border-color: rgba(0,245,212,0.3);
        transform: translateX(6px);
      }

      .item-icon { font-size: 1.3rem; }

      .item-label {
        display: block;
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .item-value {
        display: block;
        font-size: 0.9rem;
        color: #94a3b8;
        margin-top: 2px;
      }
    }

    .availability {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background: rgba(0,245,212,0.06);
      border: 1px solid rgba(0,245,212,0.2);
      font-family: 'Space Mono', monospace;
      font-size: 0.78rem;
      color: #00f5d4;
    }

    .dot-pulse {
      width: 8px; height: 8px;
      background: #00f5d4;
      border-radius: 50%;
      display: inline-block;
      animation: pulse-glow 2s ease-in-out infinite;
    }

    /* Form Styles */
    .contact-form-wrapper {
      background: #0d1220;
      border: 1px solid rgba(0,245,212,0.1);
      padding: 36px;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        font-family: 'Space Mono', monospace;
        font-size: 0.72rem;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      input, textarea {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(148,163,184,0.15);
        color: #e2e8f0;
        padding: 12px 16px;
        font-family: 'Syne', sans-serif;
        font-size: 0.9rem;
        outline: none;
        transition: border-color 0.3s;
        resize: vertical;

        &::placeholder { color: #334155; }
        &:focus { border-color: #00f5d4; }
      }

      .error {
        font-family: 'Space Mono', monospace;
        font-size: 0.7rem;
        color: #ff6b6b;
      }
    }

    .submit-btn {
      padding: 16px 32px;
      background: #00f5d4;
      border: none;
      color: #080b14;
      font-family: 'Space Mono', monospace;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
      transition: all 0.3s;

      &:hover:not(:disabled) {
        background: transparent;
        color: #00f5d4;
        box-shadow: inset 0 0 0 1.5px #00f5d4, 0 0 20px rgba(0,245,212,0.2);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    @keyframes pulse-glow {
      0%,100% { box-shadow: 0 0 4px #00f5d4; }
      50% { box-shadow: 0 0 16px #00f5d4; }
    }

    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr; gap: 50px; }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = false;
  isSent = false;

  onSubmit() {
    this.isSending = true;

    // Mailto वापरतो - backend नाही लागत!
    const subject = encodeURIComponent(this.formData.subject);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
    );
    window.open(`mailto:bhushanpowar1999@gmail.com?subject=${subject}&body=${body}`);

    setTimeout(() => {
      this.isSending = false;
      this.isSent = true;
      setTimeout(() => {
        this.isSent = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
      }, 3000);
    }, 1000);
  }
}