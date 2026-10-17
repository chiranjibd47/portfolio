import { Component } from '@angular/core';
import { PROFILE_DATA } from '../../data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profile = PROFILE_DATA;
  copied = false;
  copyTimeout: any;

  // Pre-fill mail composer
  senderSubject = '';
  senderMessage = '';

  copyEmail(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.showCopiedToast();
      });
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = this.profile.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.showCopiedToast();
    }
  }

  private showCopiedToast(): void {
    this.copied = true;
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
    this.copyTimeout = setTimeout(() => {
      this.copied = false;
    }, 3000);
  }

  launchMail(): void {
    const subject = encodeURIComponent(this.senderSubject || 'Inquiry: Engineering Collaboration');
    const body = encodeURIComponent(this.senderMessage || 'Hello Chiranjib,\n\nI came across your portfolio and would like to connect regarding an engineering opportunity.');
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
