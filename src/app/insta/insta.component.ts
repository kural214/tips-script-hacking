import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent {
  constructor(private http: HttpClient) {

  }

  username: string = '';
  password: string = '';
  onLoginClick(args: any) {
    if (this.username && this.password) {
      const url = 'http://localhost:3000/create'
      this.http.post(url, [{ username: this.username, password: this.password }]).subscribe({
        next: (result: any) => {
          document.write(result[0].username);
        },
        error: (err: any) => {
          debugger
        }
      })
    }
  }
}
