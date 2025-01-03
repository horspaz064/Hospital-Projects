import { Component } from '@angular/core'

@Component({
    selector: 'app-sidebar',
    templateUrl: '../../templates/hospital/sidebar/index.html',
   styleUrl:'../../templates/hospital/sidebar/style.css',
})

export class SidebarComponent {
    // function for use tagget

    isSidebarClosed: boolean = false;

    toggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
    }
}
