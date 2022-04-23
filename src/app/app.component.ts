import { Component , OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // code goes here
  title = 'tictactoe';
    myx:any;
    myy:any;
    player1:any="X";
    lastPlayer:any="Y";
    play:any;
    winner:any;
    isDisabled: boolean = false;
    ngOnInit() {

    }
    tictoc(x:any ,y:any){
      this.myx=x;
      this.myy=y;


  if(this.myx==1 && this.myy==1){
    if(document.getElementsByClassName("square")[0].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[0].innerHTML=this.play;}}
  else if(this.myx==1 && this.myy==2){
    if(document.getElementsByClassName("square")[1].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[1].innerHTML=this.play;}}
  else if(this.myx==1 && this.myy==3){
    if(document.getElementsByClassName("square")[2].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[2].innerHTML=this.play;}}

  else if(this.myx==2 && this.myy==1){
    if(document.getElementsByClassName("square")[3].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[3].innerHTML=this.play;}}
  else if(this.myx==2 && this.myy==2){
    if(document.getElementsByClassName("square")[4].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[4].innerHTML=this.play;}}
  else if(this.myx==2 && this.myy==3){
    if(document.getElementsByClassName("square")[5].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[5].innerHTML=this.play;}}

  else if(this.myx==3 && this.myy==1){
    if(document.getElementsByClassName("square")[6].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[6].innerHTML=this.play;}}
  else if(this.myx==3 && this.myy==2){
    if(document.getElementsByClassName("square")[7].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[7].innerHTML=this.play;}}
  else if(this.myx==3 && this.myy==3){
    if(document.getElementsByClassName("square")[8].innerHTML==""){
      this.playerPlay();
  document.getElementsByClassName("square")[8].innerHTML=this.play;}}

  // win horizontal
  for(var i=0; i<3;i+=3){
  if(document.getElementsByClassName("square")[i].innerHTML== document.getElementsByClassName("square")[i+1].innerHTML && document.getElementsByClassName("square")[i+1].innerHTML==document.getElementsByClassName("square")[i+2].innerHTML && document.getElementsByClassName("square")[i].innerHTML!=""){
    this.winner=this.lastPlayer;
    document.getElementsByClassName("win")[0].innerHTML=this.winner;
    this.isDisabled=true;
  }
  }
  // win vertical
  for(var i=0; i<3;i++){
  if(document.getElementsByClassName("square")[i].innerHTML== document.getElementsByClassName("square")[i+3].innerHTML && document.getElementsByClassName("square")[i+3].innerHTML==document.getElementsByClassName("square")[i+6].innerHTML && document.getElementsByClassName("square")[i].innerHTML!=""){
    this.winner=this.lastPlayer;
    document.getElementsByClassName("win")[0].innerHTML=this.winner;
    this.isDisabled=true;

  }
  }
  // win diagonal left to right
  if(document.getElementsByClassName("square")[0].innerHTML== document.getElementsByClassName("square")[4].innerHTML && document.getElementsByClassName("square")[4].innerHTML==document.getElementsByClassName("square")[8].innerHTML && document.getElementsByClassName("square")[0].innerHTML!=""){
    this.winner=this.lastPlayer;
    document.getElementsByClassName("win")[0].innerHTML=this.winner;
    this.isDisabled=true;
  }

  // win diagonal right to left
  if(document.getElementsByClassName("square")[2].innerHTML== document.getElementsByClassName("square")[4].innerHTML && document.getElementsByClassName("square")[4].innerHTML==document.getElementsByClassName("square")[6].innerHTML && document.getElementsByClassName("square")[2].innerHTML!=""){
    this.winner=this.lastPlayer;
    document.getElementsByClassName("win")[0].innerHTML=this.winner;
    this.isDisabled=true;
  }



    }
    reset(){
      for(var i=0 ;i<9;i++){
      document.getElementsByClassName("square")[i].innerHTML="";}
      document.getElementsByClassName("win")[0].innerHTML="";
      this.isDisabled=false;
      this.player1="X";

    }
    playerPlay(){
      if (this.player1=="X" && this.lastPlayer=="Y" ||this.player1=="X"){
        this.play="X";
        this.player1="Y";
        this.lastPlayer="X";
        console.log(this.play);
      }else{
        this.play="Y";
        this.player1="X"
        this.lastPlayer="Y";
        console.log(this.play);

      }
    }
  }
