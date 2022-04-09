import React, { Component } from 'react';
import { cardsData } from '../cards';
import Card from './Card'

class Game extends Component {
  state = { 
    cards: cardsData,
    isClicked: []
   } 

  handleClick = card => {
    let isClicked = [...this.state.isClicked]
    let cards = [...this.state.cards]
    const index = cards.indexOf(card)
    cards[index].isFlipped = true
    isClicked.push(cards[index].name)
    const countTrue = cards.filter(card => card.isFlipped == true)
    console.log(countTrue.length)
    console.log(cardsData);
    if (countTrue.length > 2){
      if (!(isClicked[0] == isClicked[1])){
        cards.forEach(card => card.isFlipped = false)
        isClicked = []
      } else {
        console.log("BOOOM.")
      }
    }
   
 
    this.setState({cards, isClicked})
    
    // cards[index].isFlipped = true
    // this.setState({cards})
  }

  render() {
    let {cards, isClicked} = this.state
    
    return (
      <section className="memory-game">
      {cards.map(card => <Card key={card.id} card={card} onClick={() => this.handleClick(card)} />)}
    </section>
    );
  }
}
 
export default Game;
