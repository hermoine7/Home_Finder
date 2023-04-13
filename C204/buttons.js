AFRAME.registerComponent("create-pay", {
    init: function() {
      this.clickButton();
      },
      clickButton: function(){
        this.el.addEventListener("click", () => {
            const id = this.el.getAttribute("id");
            if(id == "buybutton"){
                swal({
                    icon: "https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg",
                    title: "We are so glad you liked this house!",
                    text: "Contact the owner at +91 12345-67890 or example@gmail.com to complete the payment process",
                    buttons: "Okay!"
                  })
                  .then(function () {
                    window.location.href = '../index.html';
                  });
            }
            
        });
      }
    });