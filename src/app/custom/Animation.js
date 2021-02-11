import gsap from 'gsap/all';

export default class Animation{
    constructor(){
        this._planets = document.querySelectorAll('.dots');
        this._scaleBtn = document.querySelector('#scale-button');
        this._positionBtn = document.querySelector('#position-button');
        this._stopBtn = document.querySelector('#stop-button');
        this._tl = gsap.timeline();
        this.temp = null;
    }

    scaleAnimation(){
        this._tl.seek(0);
        this._tl = gsap.to(this._planets, {scale:0, repeat:-1, duration:1, id: "scaleStagger", stagger: {
            amount: 1,
            yoyo: true,
            repeat: -1,
          }});
    }

    positionAnimation(){
        this._tl.seek(0);
        this._tl = gsap.to(this._planets, {y: 50,repeat:-1, duration:1, id: "positionStagger", stagger: {
            amount: 1,
            from: 'edges',
            yoyo: true,
            repeat: -1,
          }});
    }

    stop(){
        this._tl.pause();
        // this._tl.clear();
    }

    animationHandler(){
        let isScaleActive = false;
        let isPositionActive = false;
        this._scaleBtn.addEventListener('click', () => {
            if(isScaleActive == false && isPositionActive == false){
            this.scaleAnimation();
            isScaleActive = true;
            }
        });
        this._positionBtn.addEventListener('click', () => {
            if(isScaleActive == false && isPositionActive == false){
                this.positionAnimation();
                isPositionActive = true;
                }
        });
        this._stopBtn.addEventListener('click', () => {
            this.stop();
            isScaleActive = false;
            isPositionActive = false;
        });
    }
}