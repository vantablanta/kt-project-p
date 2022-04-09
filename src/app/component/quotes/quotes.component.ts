import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "First Quote", 5, 0),
    new Quote(2, "Second Quote", 7, 0),
    new Quote(3, "Third Quote", 1, 0)
  ]

  arr: number[] = this.quotes.map(function (quote) {
    return quote.upvotes
  })
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
