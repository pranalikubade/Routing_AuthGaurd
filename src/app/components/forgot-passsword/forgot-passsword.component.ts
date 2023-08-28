import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-passsword',
  templateUrl: './forgot-passsword.component.html',
  styleUrls: ['./forgot-passsword.component.scss']
})
export class ForgotPassswordComponent implements OnInit {
  faLock = faLock;
  constructor() {}

  ngOnInit(): void {}
}
