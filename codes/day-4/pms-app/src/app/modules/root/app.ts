import { Component } from '@angular/core';
import { DashBoard } from "../shared/components/dash-board/dash-board";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DashBoard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
