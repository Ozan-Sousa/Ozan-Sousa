console.log("ello")

function myFunction() {
    var x = document.getElementById("MobileNav");
    e = x.children;
    console.log("nuggies")
    if (x.style.height == "0px") {
        x.style.height = "60vh";
        setTimeout(()=>{for (let i=0; i < e.length; i++){
          e[i].style.display="grid";
        }}, 75)

    } else {
       x.style.height = "0px"
       for (let i=0; i < e.length; i++){
        e[i].style.display="none";
      }
    }
  }

function scrollDown(){
  posY = document.getElementById("scrollDown");
  posY.scrollIntoView({ behavior: "smooth", top});;
}


