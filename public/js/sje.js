class MyClass {
  constructor() {
  }
  test() {
    console.log("This is a test function.");
  }

  rateMove(move, rating, side) {

    var pieceValue = { 'p': 100, 'n': 300, 'b': 300, 'r': 500, 'q': 1000, 'k': 60000, 'k_e': 60000 };
    if ('captured' in move)
    {
        // Opponent piece was captured (good for us)
        if (move.color === side)
        {
          rating += pieceValue[move.captured] ;
        }
        // Our piece was captured (bad for us)
        else
        {
          rating -= pieceValue[move.captured];
        }
    }
    return rating;
  }

  getHighestRatedMove(game, depth, bMyTurn, rating, side) {

    //console.log("getHightestRatedMove")
    var moves = game.moves({ verbose: true });
    moves.sort(function(a, b){return 0.5 - Math.random()});
    var maxRating = Number.NEGATIVE_INFINITY;
    var minRating = Number.POSITIVE_INFINITY;
    var nextMove;

    if (depth === 0 || moves.length === 0) {
        return [null, rating];
    }

    var currMove;
    for (var i = 0; i < moves.length; i++) {
        
        currMove = moves[i];
        
        var next = game.move(currMove);
        var nextRating = this.rateMove(currMove, rating, side);
        //console.log("move", i, "depth", depth, "rating", rating, "next", nextRating, currMove);
        var [aMove,childRating] = this.getHighestRatedMove(game, depth-1, !bMyTurn, nextRating, side);
        // cleanup game state
        game.undo();

        if(bMyTurn)
        {
           //My turn - update rating that is better for me
           if (childRating >= maxRating)
           {
              maxRating = childRating;
              nextMove = currMove;
           }
        }
        else
        {
          //Opponent turn - update rating that is better for opponent
          if (childRating <= minRating)
          {
             minRating = childRating;
             nextMove = currMove;
          }
        }

        //console.log("minmax", minRating,maxRating,"movenumber", game._moveNumber, currMove);
      }
        if(bMyTurn)
          return [nextMove,maxRating];
        else
          return [nextMove,minRating];
}


}

export { MyClass };