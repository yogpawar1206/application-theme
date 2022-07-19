import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete-simple',
  templateUrl: './autocomplete-simple.component.html',
  styleUrls: ['./autocomplete-simple.component.scss']
})
export class AutocompleteSimpleComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  constructor() { }

  ngOnInit(): void {
  }

}
