import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public total = []
  public topScore:number
  public studentStatus   
  public studentData:any[] = [
    {
        "name":"rajiv",
        "marks":{
            "Maths":18,
            "English":21,
            "Science":45
        },
        "rollNumber":"KV2017-5A2"
    },
    {
        "name":"abhishek",
        "marks":{
            "Maths":43,
            "English":30,
            "Science":37
        },
        "rollNumber":"KV2017-5A1"
    },
    {
        "name":"zoya",
        "marks":{
            "Maths":42,
            "English":31,
            "Science":50
        },
        "rollNumber":"KV2017-5A3"
    }
]

  constructor() { }

  ngOnInit() {
    this.studentData = this.studentData.sort((a, b) => a.name.localeCompare(b.name))
    this.totalScore()
    this.status()
    this.topper()
  }

  totalScore(){
   this.studentData.forEach(a => {
    let res = a.marks.English + a.marks.Maths + a.marks.Science
    this.total.push(res)
    console.log(this.total)
  }
    )
  }
  status(){
  
    this.studentData.forEach(a => {
      let sample = a.marks
      let values = [];
      
      for (var key in sample) {
      values.push( sample[key]);
      };
      console.log(values);
      
      this.studentStatus  = values.find(b => b<20)? "Fail" : "Pass"   
      
       console.log(this.studentStatus)
       })
    
  }

  topper(){
   this.topScore =  Math.max(...this.total)
   console.log(this.topScore)
   this.studentData.forEach(a => {
    let res = a.marks.English + a.marks.Maths + a.marks.Science
    this.total.push(res)
    // this.studentStatus = this.total.find(c => (c === this.topScore)||(c > 20))?'Topper':'Pass'
    // console.log(this.studentStatus)
  })
  
  }
 
 
}
