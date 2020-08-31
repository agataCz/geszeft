import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { Contact } from '../../models/Contact'

@Component({
  selector: 'geszeft-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formClass: string;
  requestSended: boolean;

  contactForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    }
  )
  constructor(
    private contactService: ContactService)
     { }

  ngOnInit(): void {
    this.requestSended = false;
  }

  onSubmit(): void {
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control.markAsDirty({ onlySelf: true });
      });

      if(this.contactForm.valid)
      {
        var newContact: Contact = {
          email: this.email.value,
          message: this.message.value
        }

        this.contactService.sendMessage(newContact).subscribe();
        this.requestSended = true;
      }
  }

  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
