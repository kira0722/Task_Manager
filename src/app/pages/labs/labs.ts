import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  titles = 'Hello';
  tasks = [
    'Install Angular CLI',
    'Create project'
  ];

  name = 'carlitos'
  age = 21

  disabled = true
  img = 'https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/cat2-1024x676.jpg'

  person = {
    name: 'Pedrito',
    age: 34,
    avatar: 'https://st3.depositphotos.com/11660552/18285/v/450/depositphotos_182857044-stock-illustration-vector-illustration-of-a-crow.jpg'
  }

  clickHandler(){
    alert('hi')
  }

  changeHandler(event: Event){
    console.log(event);
  }
}
