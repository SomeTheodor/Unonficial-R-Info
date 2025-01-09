import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
@Component({
  selector: 'app-doc-page',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.css'
})
export class DocPageComponent {

}
