import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from "../../ApiService";
import Fact from "../../types/fact";

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  providers: [ApiService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  apiService = inject(ApiService);
  fact: Fact | undefined;

  ngOnInit() {
    this.apiService.getFact().subscribe((fact: Fact) => {
      this.fact = fact;
    })
  }
}
