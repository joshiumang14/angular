import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/my-feature/header/header.component'; // Adjust path if needed
import { ContentComponent } from './features/my-feature/content/content.component'; // Adjust path if needed
import { FooterComponent } from './features/my-feature/footer/footer.component';
// Adjust path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'Dashboard';
}
