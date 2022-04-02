import { SeriesModel, Urls } from './../models/series.model';
import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

 public series: SeriesModel;
 public erro: any;


  constructor(private seriesService: SeriesService) {
    this.getAll
  }

  ngOnInit() {

  }

  getAbout() {
    this.seriesService.getAbout()
    .then(about => console.log(about))
  }

  getAll(): void {
    this.seriesService.getInfo()
    .subscribe((data: SeriesModel) => {
      this.series = data;
      console.log(data)
    },

    error => {
      this.erro = error
     console.log(error)
    })

}
}
