import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = ''
  enableButton = false;

  constructor() {
    this.checkButtonStatus();
   }

  ngOnInit() {
  }

  checkButtonStatus() {
    if (this.username  == '') {
      this.enableButton = false
    }
    else {
      this.enableButton = true
    }
  }
  onUpdateUsername(event: any) {
    this.username = event.target.value;
    this.checkButtonStatus();
  }

  onClearUsername() {
    this.username = '';
  }

}
