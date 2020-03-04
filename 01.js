//console.log(e.pageX);







let x_x = 1;
let y_y = 1;

let xtx = 1;
let yty = 1;



let fieldElem = document.getElementById("field");
let fh = fieldElem.offsetHeight;
let fw = fieldElem.offsetWidth;

function moveBall(dx, dy){
  let delta = 10;
  let ballElem = document.getElementById("ball");


  let bh = ballElem.offsetHeight;
  let bw = ballElem.offsetWidth;



//X-X

  if ((ballElem.offsetLeft >= fw-bw-delta) && (x_x == 1)){
    x_x =- 1;
    ballElem.style.animation = 'spin 0.25s linear infinite normal';
  }
  else if ((ballElem.offsetLeft <= delta) && (x_x == -1)){
    ballElem.style.animation = 'spin 0.5s linear infinite reverse';
   x_x = 1;
 }
//Y-Y

if ((ballElem.offsetTop >= fh-bh-delta) && (y_y == 1)){
  y_y =- 1;
  ballElem.style.animation = 'spin 0.5s linear infinite normal';
}
else if ((ballElem.offsetTop <= delta) && (y_y == -1)){
 y_y = 1;
 ballElem.style.animation = 'spin 1s linear infinite reverse';
}

// MOVE
ballElem.style.left = (ballElem.offsetLeft + dx*x_x) + "px";
ballElem.style.top = (ballElem.offsetTop + dy*y_y) + "px";

}


function timeMove(dx, dy){
  let delta = -40;
  let timeElem = document.getElementById("time");
  let th = timeElem.offsetHeight;
  let tw = timeElem.offsetWidth;
  if ((timeElem.offsetLeft >= fw-tw-delta) && (xtx == 1)){
    xtx =- 1;
    R+=10;

  }
  else if ((timeElem.offsetLeft <= delta) && (xtx == -1)){
   xtx = 1;

   G+=10;

  }
  //Y-Y
  if ((timeElem.offsetTop >= fh-th-delta) && (yty == 1)){
  yty =- 1;

  B+=10;
  }
  else if ((timeElem.offsetTop <= delta) && (yty == -1)){
  yty = 1;
  R+=10;

  }


  // MOVE
  timeElem.style.left = (timeElem.offsetLeft + dx*xtx) + "px";
  timeElem.style.top = (timeElem.offsetTop + dy*yty) + "px";

}



setInterval(moveBall, 5, 2, 2)
setInterval(timeMove, 10, 2, 2)

//moveBall(-100,-50);

class TimeFormatted extends HTMLElement {

  render() { // (1)
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

  connectedCallback() { // (2)
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() { // (3)
    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) { // (4)
    this.render();
  }

}

customElements.define("time-formatted", TimeFormatted);
