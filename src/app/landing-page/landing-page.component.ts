import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/constants/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  services = SERVICES;
  constructor() {}

  ngOnInit(): void {
    $('#myCarousel').on('slide.bs.carousel', (e: any) => {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          if (e.direction == 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo($(this).find('.carousel-inner'));
          }
        }
      }
    });
  }
}
