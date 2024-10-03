import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { OrbitsSectionComponent } from "./orbits-section/orbits-section.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [SearchComponent, UserdetailsComponent, OrbitsSectionComponent]
})
export class HeaderComponent {

}
