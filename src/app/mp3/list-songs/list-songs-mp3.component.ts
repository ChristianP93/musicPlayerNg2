import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Mp3Service } from '../mp3.service';

@Component({
  selector: 'ng-list-songs',
  templateUrl: './list-songs-mp3.template.html',
  styleUrls: ['./list-songs-mp3.style.css'],
  providers:[]
})

export class ListSongsComponent implements OnInit{
  public audio = new Audio();
  public listSongs : any[] = [];
  public imageAlbum : String;
  public statusPause = false;
  public statusMuted = false;
  private statusVolume : number = 100;
  private numSong : number = 0;
  public durationSong : number = 0;
  public now : number = 0;

  constructor( private mp3Service: Mp3Service){}

  ngOnInit(){
    return this.mp3Service.getSongs().subscribe((res:any) => {
      this.listSongs = res.response;
      this.audio.src = "http://127.0.0.1:4201/api/v1/" + this.listSongs[this.numSong];
      this.audio.play();
      return this.progressbarValue();
    });
  };

  progressbarValue(){
      this.audio.addEventListener("timeupdate", () => {
        this.now = Math.floor((this.audio.currentTime * 100) / this.audio.duration);
      }, false);
  }

  musicPausePlay() {
    return (this.audio.paused === true ) ? this.audio.play() : this.audio.pause();
  }

  musicMuted(){
    return (this.audio.muted === true) ? this.audio.muted = false : this.audio.muted = true;
  }

  musicSetAudio(){
    return this.audio.volume = (this.statusVolume / 100);
  }

  musicRewind(){
    this.numSong --;
    if(this.numSong < 0) this.numSong = 0;
    this.audio.src = "http://127.0.0.1:4201/api/v1/" + this.listSongs[this.numSong];
    return this.audio.play();
  }

  musicForward(){
    this.numSong ++;
    if(this.numSong > this.listSongs.length) this.numSong = 0;
    this.audio.src = "http://127.0.0.1:4201/api/v1/" + this.listSongs[this.numSong];
    return this.audio.play();
  }

  downloadSong(){

  }


}
