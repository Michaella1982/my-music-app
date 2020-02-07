import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-crates',
  templateUrl: './my-crates.component.html',
  styleUrls: ['./my-crates.component.scss']
})
export class MyCratesComponent implements OnInit {

  constructor(
    public artistName: string,
    public albumTitle: string,
    public genre: string,
    
  ) { }

  ngOnInit() {
  }

}
