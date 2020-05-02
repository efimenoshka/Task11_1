import { Component } from '@angular/core';
import { MyDet } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task1';

  inputDet = 'New det';

  dets: MyDet[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.dets.push(new MyDet(i + 1, "Datchik", Math.random()*2 > 1? true : false));
    }
  }

  onPlus(){
    if (this.dets.length > 0) {
      let lastId = this.dets[this.dets.length - 1].id;
      this.dets.push(new MyDet(lastId + 1, this.inputDet, Math.random()*2 > 1? true : false));
    } else {
      let lastId = 0;
      this.dets.push(new MyDet(lastId + 1, this.inputDet, Math.random()*2 > 1? true : false));
    }
  }

  onDelete(item){
    let del = this.dets.indexOf(item);
    this.dets.splice(del, 1);
  }
}