import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remove-element',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './remove-element.component.html',
  styleUrl: './remove-element.component.scss'
})
export class RemoveElementComponent {
  inputBindings:any
  targetBindings:any
  result:any

  getresult(){
    let input = JSON.parse(this.inputBindings)
    let target = +this.targetBindings
    //start
    let i = 0
    for(let j = input.length-1; j>=i; j--){
      if(input[i] == target){
        input[i] = input[j]
      }else{
        i++
        j++
      }
    }
    this.result = i
    // end 
  }
}
