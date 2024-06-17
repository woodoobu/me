import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start2',
  templateUrl: './start2.component.html',
  styleUrls: ['./start2.component.scss']
})
export class Start2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  start3(){
    this.router.navigate(['start3'],
      {skipLocationChange:true}
    );
  }
}
