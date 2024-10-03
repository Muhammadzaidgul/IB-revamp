import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../auth/footer/footer.component";

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.css',
    imports: [RouterOutlet, FooterComponent]
})
export class AuthLayoutComponent {

}
