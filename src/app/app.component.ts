import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'counter-app';
  imageUrl = 'https://picsum.photos/200/300';

  getTitle() {
    return this.title;
  }

  user: any = null;

  ngOnInit() {
    this.user = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    }
  }

  clickCount = 0;

  increment(){
    this.clickCount++;
  }

  decrement(){
    if(this.clickCount>0) this.clickCount--;
  }

  names = [
    'John',
    'Siva',
    'Pk',
    'Asvanth'
  ]

  showMe = false;
}
