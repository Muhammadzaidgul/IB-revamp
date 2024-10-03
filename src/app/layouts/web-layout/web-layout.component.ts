import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { MenuToggleComponent } from "../../sidebar/menu-toggle/menu-toggle.component";

@Component({
    selector: 'app-web-layout',
    standalone: true,
    templateUrl: './web-layout.component.html',
    styleUrl: './web-layout.component.css',
    imports: [RouterOutlet, SidebarComponent, MenuToggleComponent]
})
export class WebLayoutComponent {

}