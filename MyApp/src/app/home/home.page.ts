import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sounds = {
    sound1:new Tone.Player("beats/beat1.mp3").toMaster(),
    sound2:new Tone.Player("beats/beat2.mp3").toMaster(),
    sound3:new Tone.Player("beats/beat3.mp3").toMaster(),
    sound4:new Tone.Player("beats/beat4.mp3").toMaster(),
    sound5:new Tone.Player("beats/guitare1.mp3").toMaster(),
    sound6:new Tone.Player("beats/guitare2.mp3").toMaster(),
    sound7:new Tone.Player("beats/guitare3.mp3").toMaster(),
    sound8:new Tone.Player("beats/guitare4.mp3").toMaster(),
    sound9:new Tone.Player("beats/leadguitare1.mp3").toMaster(),
    sound10:new Tone.Player("beats/leadguitare2.mp3").toMaster(),
    sound11:new Tone.Player("beats/leadguitare3.mp3").toMaster(),
    sound12:new Tone.Player("beats/leadguitare4.mp3").toMaster(),
    sound13:new Tone.Player("beats/rGuitare1.mp3").toMaster(),
    sound14:new Tone.Player("beats/rGuitare2.mp3").toMaster(),
    sound15:new Tone.Player("beats/rGuitare3.mp3").toMaster(),
    sound16:new Tone.Player("beats/rGuitare4.mp3").toMaster(),
  }

  tmm = false;
  tmr = false;
  tma = false;
  tmb = false;
  tmc = false;
  tmd = false;
  tme = false;
  tmf = false;
  tmg = false;
  tmh = false;
  tmi = false;
  tmj = false;
  tmk = false;
  tml = false;
  tmo = false;
  tmy = false;
  
  change() {
    this.tmr=!this.tmr;
    if(this.tmr){Tone.context.resume().then(() => {this.sounds.sound1.start()});
    this.tmm = false;
    this.tma = false;
    this.tmb = false;
  }
  }
  change1() {
    this.tmm = !this.tmm;
    if(this.tmm){Tone.context.resume().then(() => {this.sounds.sound2.start()});
    this.tmr = false;
    this.tma = false;
    this.tmb = false;
  }
  }
  change2() {
    this.tma = !this.tma;
    if(this.tma){Tone.context.resume().then(() => {this.sounds.sound3.start()});
    this.tmr = false;
    this.tmm = false;
    this.tmb = false;
  }
  }
  change3() {
    this.tmb = !this.tmb;
    if(this.tmb){Tone.context.resume().then(() => {this.sounds.sound4.start()});
    this.tmr = false;
    this.tma = false;
    this.tmm = false;
  }
  }
  change4() {
    this.tmc = !this.tmc
    if(this.tmc){Tone.context.resume().then(() => {this.sounds.sound5.start()})
    this.tme = false;
    this.tmd = false;
    this.tmf = false;
  }
  }
  change5() {
    this.tmd = !this.tmd
    if(this.tmd){Tone.context.resume().then(() => {this.sounds.sound6.start()})
    this.tme = false;
    this.tmc = false;
    this.tmf = false;
  }
  }
  change6() {
    this.tme = !this.tme
    if(this.tme){Tone.context.resume().then(() => {this.sounds.sound7.start()})
    this.tmc = false;
    this.tmd = false;
    this.tmf = false;
  }
  }
  change7() {
    this.tmf = !this.tmf
    if(this.tmf){Tone.context.resume().then(() => {this.sounds.sound8.start()})
    this.tme = false;
    this.tmd = false;
    this.tmc = false;
  }
  }
  change8() {
    this.tmg = !this.tmg
    if(this.tmg){Tone.context.resume().then(() => {this.sounds.sound9.start()})
    this.tmh = false;
    this.tmi = false;
    this.tmj = false;
  }
  }
  change9() {
    this.tmh = !this.tmh
    if(this.tmh)Tone.context.resume().then(() => {this.sounds.sound10.start()})
    this.tmg = false;
    this.tmi = false;
    this.tmj = false;
  }
  change10() {
    this.tmi = !this.tmi
    if(this.tmi)Tone.context.resume().then(() => {this.sounds.sound11.start()})
    this.tmh = false;
    this.tmg = false;
    this.tmj = false;
  }
  change11() {
    this.tmj = !this.tmj
    if(this.tmj)Tone.context.resume().then(() => {this.sounds.sound12.start()})
    this.tmh = false;
    this.tmi = false;
    this.tmg = false;
  }
  change12() {
    this.tmk = !this.tmk
    if(this.tmk)Tone.context.resume().then(() => {this.sounds.sound13.start()})
    this.tmo = false;
    this.tmy = false;
    this.tml = false;
  }
  change13() {
    this.tml = !this.tml
    if(this.tml)Tone.context.resume().then(() => {this.sounds.sound14.start()})
    this.tmo = false;
    this.tmy = false;
    this.tmk = false;
  }
  change14() {
    this.tmo = !this.tmo
    if(this.tmo)Tone.context.resume().then(() => {this.sounds.sound15.start()})
    this.tmk = false;
    this.tmy = false;
    this.tml = false;
  }
  change15() {
    this.tmy = !this.tmy
    if(this.tmy)Tone.context.resume().then(() => {this.sounds.sound16.start()})
    this.tmo = false;
    this.tmk = false;
    this.tml = false;
  }
  deleteAll() {
    this.tmr = false;
    this.tmm = false
    this.tma = false
    this.tmb = false
    this.tmc = false
    this.tmd = false
    this.tme = false
    this.tmf = false
    this.tmg = false
    this.tmh = false
    this.tmi = false
    this.tmj = false
    this.tmk = false
    this.tml = false
    this.tmo = false
    this.tmy = false
  }

  ngOnInit() {
    setInterval(() => {
      if(this.tmr)Tone.context.resume().then(() => {this.sounds.sound1.start()});
    }, 16000);

    setInterval(() => {
      if(!this.tmr)Tone.context.resume().then(()=>{this.sounds.sound1.stop()})
    }, 500);
    setInterval(() => {
      if(this.tmm)Tone.context.resume().then(() => {this.sounds.sound2.start()});
    }, 16000);

    setInterval(() => {
      if(!this.tmm)Tone.context.resume().then(()=>{this.sounds.sound2.stop()})
    }, 500);
    setInterval(() => {
      if(this.tma)Tone.context.resume().then(() => {this.sounds.sound3.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tma)Tone.context.resume().then(() => {this.sounds.sound3.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmb)Tone.context.resume().then(() => {this.sounds.sound4.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmb)Tone.context.resume().then(() => {this.sounds.sound4.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmc)Tone.context.resume().then(() => {this.sounds.sound5.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmc)Tone.context.resume().then(() => {this.sounds.sound5.stop()});
    }, 500);    
    setInterval(() => {
      if(this.tmd)Tone.context.resume().then(() => {this.sounds.sound6.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmd)Tone.context.resume().then(() => {this.sounds.sound6.stop()});
    }, 500);
    setInterval(() => {
      if(this.tme)Tone.context.resume().then(() => {this.sounds.sound7.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tme)Tone.context.resume().then(() => {this.sounds.sound7.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmf)Tone.context.resume().then(() => {this.sounds.sound8.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmf)Tone.context.resume().then(() => {this.sounds.sound8.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmg)Tone.context.resume().then(() => {this.sounds.sound9.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmg)Tone.context.resume().then(() => {this.sounds.sound9.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmh)Tone.context.resume().then(() => {this.sounds.sound10.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmh)Tone.context.resume().then(() => {this.sounds.sound10.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmi)Tone.context.resume().then(() => {this.sounds.sound11.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmi)Tone.context.resume().then(() => {this.sounds.sound11.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmj)Tone.context.resume().then(() => {this.sounds.sound12.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmj)Tone.context.resume().then(() => {this.sounds.sound12.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmk)Tone.context.resume().then(() => {this.sounds.sound13.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmk)Tone.context.resume().then(() => {this.sounds.sound13.stop()});
    }, 500);
    setInterval(() => {
      if(this.tml)Tone.context.resume().then(() => {this.sounds.sound14.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tml)Tone.context.resume().then(() => {this.sounds.sound14.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmo)Tone.context.resume().then(() => {this.sounds.sound15.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmo)Tone.context.resume().then(() => {this.sounds.sound15.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmy)Tone.context.resume().then(() => {this.sounds.sound16.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmy)Tone.context.resume().then(() => {this.sounds.sound16.stop()});
    }, 500);
    // setInterval(() => {
    //   var synth = new Tone.Player().toMaster()
    //   if(this.tmg)synth.triggerAttackRelease('B5', '5n');
    // }, 500);

  }

}





