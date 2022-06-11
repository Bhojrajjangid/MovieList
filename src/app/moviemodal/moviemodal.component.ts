import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moviemodal',
  templateUrl: './moviemodal.component.html',
  styleUrls: ['./moviemodal.component.css']
})
export class MoviemodalComponent implements OnInit {

  @Input() movieContent: any;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  }

}
