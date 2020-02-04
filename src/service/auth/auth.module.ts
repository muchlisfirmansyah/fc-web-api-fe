import { NgModule } from '@angular/core';
import { AuthenticationService } from './auth.service';


@NgModule({
    providers: [
        AuthenticationService
    ],
})
export class AuthModule { }
