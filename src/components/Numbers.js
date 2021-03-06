import {useRef, useEffect} from "react"

const Numbers = ( { layer } ) => {

    const canvasRef = useRef(null);

    let ArrNumbers = [];

  //  let canvas;

 //   let ctx;

    let isForeground = false;

    function BackgroundNumber(character, spawnDelay, positionX, size, speed) {
        this.character = character;
        this.spawnDelay = spawnDelay;
        this.positionY = 0;
        this.positionX = positionX;
        this.size = size;
        this.speed = speed;
    }


    function init() {

        if(layer === "foreground") {
            isForeground = true;
        }

        if(isForeground) {

            for(let i = 0; i < 8; i++) {

                const size = Math.floor(Math.random() * 148) + 92
    
                ArrNumbers.push(
                    new BackgroundNumber(
                        Math.floor(Math.random() * 9),
                        Math.floor(Math.random() * 100) + 40,
                        Math.floor(Math.random() * window.innerWidth) + 64,
                        size,
                        size * 0.03
                    )
                )
            }    

        } else {
            for(let i = 0; i < 24; i++) {

                const size = Math.floor(Math.random() * 74) + 8
    
                ArrNumbers.push(
                    new BackgroundNumber(
                        Math.floor(Math.random() * 9),
                        Math.floor(Math.random() * 40) + 1,
                        Math.floor(Math.random() * window.innerWidth) + 64,
                        size,
                        size * 0.03
                    )
                )
            }
        }
    }


    function draw(element, ctx) {

      if(element.spawnDelay <= 0) {
          if(element.positionY < window.innerHeight + 128) {
            ctx.font = `${element.size}px Arial`;
            ctx.fillText(element.character, element.positionX, element.positionY);
            element.positionY += element.speed; 
            } else {
                if(isForeground) {
                    element.positionY = 0;
                    element.positionX = Math.floor(Math.random() * window.innerWidth) + 64;
                    element.spawnDelay = Math.floor(Math.random() * 100) + 40;
                    element.size = Math.floor(Math.random() * 148) + 92;
                    element.speed = element.size * 0.03;
                } else {
                    element.positionY = 0;
                    element.positionX = Math.floor(Math.random() * window.innerWidth) + 64;
                    element.spawnDelay = Math.floor(Math.random() * 40) + 1;
                    element.size = Math.floor(Math.random() * 74) + 8;
                    element.speed = element.size * 0.03;
                }
            }
      } else {
          element.spawnDelay -= 0.1;
      }

    }

    useEffect(() => {
    //    canvas = canvasRef.current;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const ctx = canvasRef.current.getContext("2d");

        init();

        const interval = setInterval(() => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ArrNumbers.forEach((function (num) { draw(num, ctx) }));
        }, 5); 

        return () => clearInterval(interval);

    }, [])
    

    return (
        <div className={layer} style={{
            width: window.innerWidth, 
            height: window.innerHeight, }}>

            <canvas ref={canvasRef}/>
            
        </div>
    )
}

export default Numbers