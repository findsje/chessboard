import $ from 'jquery/dist/jquery.min.js';
import '/public/js/script.js';
import { MyClass } from '/public/js/sje.js';
window.MyClass = MyClass;

//import { Chess } from 'chess.js/dist/esm/chess.js';
//import { Chess } from 'chess.js/dist/cjs/chess.js';
import { Chess } from 'chess.js';
window.Chess = Chess;

import Chessboard from '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js';
import '@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.css';  // Import CSS
