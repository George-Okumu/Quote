import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote('Time may change me, but I cant trace time.', 'George', 'Marisa Lacsa', new Date(2020,4,1)),
   new Quote('The way to get started is to quit talking and begin doing.', 'Becky Innocent', 'Walt Disney', new Date(2020,8,5)),
   new Quote('Tell me and I forget. Teach me and I remember. Involve me and I learn', 'Agnes', 'Benjamin Franklin', new Date(2020,9,4))
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  addVote(quote, index) {
    if (quote) {
      this.quotes[index].upvote += 1;
    }
  }
  lessVote(quote, index) {
    if (quote) {
      this.quotes[index].downvote += 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
