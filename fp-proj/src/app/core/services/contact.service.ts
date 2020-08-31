import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Contact } from '../../models/Contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactUrl = 'api/contact';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {
  }

  sendMessage(contact: Contact): Observable<Contact>
  {
    return this.httpClient.post<Contact>(this.contactUrl, contact, this.httpOptions).pipe(
      tap((newContact: Contact) => console.log("Message has been send")),
      catchError(this.handleError<Contact>('sendMessage'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
