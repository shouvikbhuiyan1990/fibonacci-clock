
class fiboClock{
  constructor(time){
    this.hour = (time.getHours() )% 12;
    this.hour = this.hour ? this.hour : 12; 
    this.minutes =Math.floor(time.getMinutes()/5);
    this.blue= 0;
    this.green= 0;
    this.red= 0;
  }
  initiateClock(){
    if(this.hour>=this.minutes){
      this.blue = this.minutes;
      this.hour = this.hour-this.minutes;
      this._checkBlue(this.blue);
      this._checkReds(this.hour);
    }
    else if(this.hour<this.minutes){
      this.blue = this.hour;
      this.minutes = this.minutes-this.hour;
      this._checkBlue(this.blue);
      this. _checkGreens(this.minutes)
    }
  }
  
  _checkBlue(blues){
    //debugger;
    let filcheck = false;
      while(blues>0){
        if(blues>=5){
          blues = blues-5;
          document.getElementById('big-5').className = 'blue';
        }
        else if(blues>=3){
          blues = blues-3;
          document.getElementById('big-3').className = 'blue';
        }
        else if(blues>=2){
          blues = blues-2;
          document.getElementById('big-2').className = 'blue';
          filcheck = true;
        }
        else if(blues == 2 && filcheck){
          blues = blues-2;
          document.getElementById('big-1-1').className = 'blue';
          document.getElementById('big-1-2').className = 'blue';
        }
        else if(blues == 1){
          blues = blues-1;
          document.getElementById('big-1-1').className = 'blue';
        }
        console.log(blues);
      }
  }
  _checkClass(ele){
    if(ele.getAttribute('class') == 'green' || ele.getAttribute('class') == 'red' || ele.getAttribute('class') == 'blue'){
      return true;
    }
    else{
      return false;
    }
  }
 _checkGreens(blues){
   debugger;
      while(blues>0){
        if(blues>=5 && !this._checkClass(document.getElementById('big-5'))){
          blues = blues-5;
          document.getElementById('big-5').className = 'green';
        }
        else if(blues>=3 && !this._checkClass(document.getElementById('big-3'))){
          blues = blues-3;
          document.getElementById('big-3').className = 'green';
        }
        else if(blues>2 && !this._checkClass(document.getElementById('big-2'))){
            blues = blues-2;
            document.getElementById('big-2').className = 'green';
        }
        else if(blues == 2 && !this._checkClass(document.getElementById('big-1-1'))&& !this._checkClass(document.getElementById('big-1-2'))){
            blues = blues-2;
            document.getElementById('big-1-1').className = 'green';
            document.getElementById('big-1-2').className = 'green';
        }
         else if(blues>2 && !this._checkClass(document.getElementById('big-1-1'))){
           blues = blues-1;
          document.getElementById('big-1-1').className = 'green';
         }
         else if(blues>2 && !this._checkClass(document.getElementById('big-1-2'))){
           blues = blues-1;
          document.getElementById('big-1-2').className = 'green';
         }
        else if(blues == 1 && !this._checkClass(document.getElementById('big-1-1'))){
            blues = blues-1;
            document.getElementById('big-1-1').className = 'green';
        }
        else if(blues == 1 && !this._checkClass(document.getElementById('big-1-2'))){
            blues = blues-1;
            document.getElementById('big-1-2').className = 'green';
        }
      }
  }
  
   _checkReds(blues){
     debugger;
      while(blues>0){
        if(blues>=5 && !this._checkClass(document.getElementById('big-5'))){
          blues = blues-5;
          document.getElementById('big-5').className = 'red';
        }
        else if(blues>=3 && !this._checkClass(document.getElementById('big-3'))){
          blues = blues-3;
          document.getElementById('big-3').className = 'red';
        }
        else if(blues>2 && !this._checkClass(document.getElementById('big-2'))){
            blues = blues-2;
            document.getElementById('big-2').className = 'red';
        }
        else if(blues == 2 && !this._checkClass(document.getElementById('big-1-1'))&& !this._checkClass(document.getElementById('big-1-2'))){
            blues = blues-2;
            document.getElementById('big-1-1').className = 'red';
            document.getElementById('big-1-2').className = 'red';
        }
         else if(blues>2 && !this._checkClass(document.getElementById('big-1-1'))){
           blues = blues-1;
          document.getElementById('big-1-1').className = 'red';
         }
         else if(blues>2 && !this._checkClass(document.getElementById('big-1-2'))){
           blues = blues-1;
          document.getElementById('big-1-2').className = 'red';
         }
        else if(blues == 1 && !this._checkClass(document.getElementById('big-1-1'))){
            blues = blues-1;
            document.getElementById('big-1-1').className = 'red';
        }
        else if(blues == 1 && !this._checkClass(document.getElementById('big-1-2'))){
            blues = blues-1;
            document.getElementById('big-1-2').className = 'red';
        }
      }
  }
}

let d = new Date();
let clock = new fiboClock(d);
clock.initiateClock();