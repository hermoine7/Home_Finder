AFRAME.registerComponent("create-buttons", {
    init: function() {
        const entityEl = document.getElementById("main-container");
        var clickCount=0;
        window.addEventListener("keydown", e => {
            if (e.key === "ArrowRight") {
                clickCount+=1;
                console.log(clickCount);
                if(clickCount == 1){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-2.png`
                    })
                }
                if(clickCount == 2){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-3.png`
                    })
                }
                if(clickCount == 3){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-4.png`
                    })
                }
                if(clickCount == 4){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-5.png`
                    })
                }
                if(clickCount == 5){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-6.png`
                    })
                }
                if(clickCount == 6){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-7.png`
                    })
                }
                if(clickCount == 7){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-8.png`
                    })
                }
                if(clickCount == 8){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-9.png`
                    })
                }
                if(clickCount == 9){
                    clickCount=0;
                }
                if(clickCount == 0){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-1.png`
                    })
                }
            }
            if (e.key === "ArrowLeft") {
                clickCount-=1;
                console.log(clickCount);
                if(clickCount == 1){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-2.png`
                    })
                }
                if(clickCount == 2){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-3.png`
                    })
                }
                if(clickCount == 3){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-4.png`
                    })
                }
                if(clickCount == 4){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-5.png`
                    })
                }
                if(clickCount == 5){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-6.png`
                    })
                }
                if(clickCount == 6){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-7.png`
                    })
                }
                if(clickCount == 7){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-8.png`
                    })
                }
                if(clickCount == 8){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-9.png`
                    })
                }
                if(clickCount == 9){
                    clickCount=0;
                }
                if(clickCount == 0){
                    entityEl.setAttribute("material", {
                        src: `./pics/place-1.png`
                    })
                }
            }
      });
      },
  });