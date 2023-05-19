import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationsService } from 'src/app/Authentication/authentications.service';
//import { ResetPassswordComponent } from 'src/app/reset-passsword/reset-passsword.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss']
})
export class UserTemplateComponent {
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  constructor(private auth:AuthenticationsService){}

  public signOutEmit(): void {
    this.signOut.emit();
  }

}
