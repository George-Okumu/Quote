import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Dont look at the clock, do what it does keep moving', 'Biron Lovine', new Date(2020,4,21)),
    new Quote('Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'LucycWigwa', new Date(2019,5,16)),
    new Quote('There is nothing good that comes easy', 'Denzel Ochieng', new Date(2015,8,3)),
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
  initNum: number;
  finNum: number;
  counter: number;

  mostLiked() {
    this.initNum = 0;
    this.finNum = 0;
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.finNum = this.quotes[this.counter].upvote;

      if (this.finNum > this.initNum) {
        this.initNum = this.finNum;
      }



    }

    return this.initNum;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
