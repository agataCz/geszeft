import { Component, OnInit } from '@angular/core';

import { ContactService } from'../../../core/services/contact.service'
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'geszeft-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<Contact[]>;

  constructor(
    private contactService: ContactService
  ) {
    this.messages$ = contactService.getMessages().pipe(shareReplay());
    this.contactService.fetchMessages();
  }

  ngOnInit(): void {
  }

}
