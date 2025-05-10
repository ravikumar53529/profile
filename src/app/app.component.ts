import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ravi-portfolio';
  // isTrue=false;
  // array:any=[]

  // onClick(){
  //   const val=1
  //   this.array.push(val)
  //   console.log(this.array)
  // }
  // onRemove(index:number){
  //    this.array.splice(index,1)
  // }

  downloadResume(): void {
  const link = document.createElement('a');
  link.href = 'assets/Ravikumar_G.pdf';
  link.download = 'Ravikumar_G.pdf'; // Optional: change the name users will see
  link.click();
}
}
