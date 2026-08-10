import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";
import { Second } from "./second/second";

@Component({
  selector: 'app-main',
  //template: `<h2>{{title}}</h2>`,
  templateUrl: './app.html',
  styleUrl: './app.css',
  //styleUrls:['./app.css'],
  imports: [Second]
})
export class App {
  //title = 'basics of angular'
  title: WritableSignal<string> = signal('basics of angular')
  computedTitle: Signal<string> = computed(() => { return `computed title: ${this.title()}` })
  inputWidth = 400

  // updateTitle(e: InputEvent) {
  //   const element = e.target as HTMLInputElement
  //   console.log(element.value);
  //   //this.title = newTitle
  // }

  // updateTitle(newTitle: string) {
  //   //this.title = newTitle
  //   this.title.set(newTitle)
  // }
}