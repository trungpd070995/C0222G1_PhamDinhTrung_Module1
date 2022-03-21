
    class Hero{
        constructor(image,top,left,size,speed) {
            this.image = image;
            this.top=top;
            this.left = left;
            this.size = size;
            this.speed = speed;
        }
        getHeroElement(){
            return '<img width="'+ this.size + '"' +
                ' height="'+ this.size + '"' +
                ' src="' + this.image +'"' +
                ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />'
        }

        moveRight(){
            this.left+=20;
            console.log('Move RIGHT');
        }
        moveLeft(){
            this.left-=20;
            console.log('Move Left');
        }
        moveTop(){
            this.top-=20;
            console.log('Move Up')
        }
        moveBottom(){
            this.top+=20;
            console.log('Move Down')
        }
    }
    let hero = new Hero("pikachu.png",20,30,200,100);
    function start() {


        if (hero.left < window.innerWidth - hero.size) {
            hero.moveRight();

        }else if(hero.top<window.innerHeight - hero.size){
            hero.moveBottom();
        }
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start, hero.speed)
    }

    start();
