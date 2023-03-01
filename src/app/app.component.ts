import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sentence = faker.lorem.sentence();
  value:string = "";
  winMessage :boolean = false;

  typingFakeText(event: Event){
    this.value = (event.target as HTMLInputElement).value;
    if(this.value === this.sentence) this.winMessage = true;
    else{
      this.winMessage = false;
    }

  }

  compare(letter: string, randomLetter:string){
    if(!this.value) return 'text-dark';

    return letter === randomLetter ? 'text-success' : 'text-danger';
  }
}
