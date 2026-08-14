import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-dash-board',
  imports: [RouterLink],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard {
  private tokenSvc = inject(TokenStorageService)
  private router = inject(Router)
  tokenStore = this.tokenSvc.getTokenStore()

  logout() {
    this.tokenSvc.removeToken()
    this.router.navigate(['/login'])
  }
}
