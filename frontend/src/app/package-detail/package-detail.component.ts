import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PackageDetailData {
  id: number;
  name: string;
  type: string;
  metadata: MetadataData[];
}

export interface MetadataData {
  key: string;
  value: string;
}