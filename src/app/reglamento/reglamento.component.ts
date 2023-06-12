import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
// import { SelectionModel } from '@angular/cdk/collections';
import { NgIterable } from '@angular/core';

// type NgIterable<T> = Array<T> | Iterable<T>;


    
type Coords = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-reglamento',
  templateUrl: './reglamento.component.html',
  styleUrls: ['./reglamento.component.css'],
  
})

export class ReglamentoComponent implements OnInit {
  //numCapitulos = [ 0, 1, 2, 3, 4 ]
  //numCapitulos = new SelectionModel(false, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  numCapitulos : NgIterable<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // numCapitulos.
  Capitulos =[ {"0" : "De los ciudadanos"},
    {"1" : "De las quejas"},
    {"2" : "Del reglamento"}
    ];
    
  // console.log(numCapitulos.sort());

cptScrolling(ev:Event): void {
  //console.log(ev);
  console.log("capitulo Scrolling activado:");
} 

  constructor(private route: ViewportScroller) {
    // this.route.scrollToPosition([100,10]);
    this.route.scrollToAnchor("capitulo-1");
   }

  ngOnInit(): void {
    
    // console.log(this.route.getScrollPosition())
    //console.log("Reglamento iniciado")
  }

}
function getScrollCoordinates (): Coords {
  return {
    x: window.scrollX,
    y: window.scrollY,
  };
}
function coordenadasScroll (elementContainer: HTMLElement, coords: Coords): void {
  console.log(elementContainer)
  //elementContainer.textContent = JSON.stringify(coords, null, 2);
}
function cptScroll(ev:Event): void {
  console.log(ev);
  var qSelector = document.querySelectorAll("h1");
  var h2Selector = document.querySelectorAll("h2");
  console.log(qSelector);
  console.log(h2Selector);
  coordenadasScroll(document.getElementById('coords')!, getScrollCoordinates());
}
// window.addEventListener("scroll", cptScroll)
