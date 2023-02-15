var Links = {
    setColor: (event) => {
      var list = document.querySelectorAll("a");
      var i = 0;
      while (i < list.length) {
        // console.log(list[i]);
        list[i].style.color = event;
        i = i + 1;
      }
    },
  };
  var Body = {
    setColor: (color) => {
      document.querySelector("body").style.color = color;
    },
    setBackgroundColor: (color) => {
      document.querySelector("body").style.backgroundColor = color;
    },
  };
  function nightDayHandler(event) {
    // this 자기자신을 가리킴
    if (event.value === "night") {
      Body.setBackgroundColor("black");
      Body.setColor("white");
      event.value = "day";

      Links.setColor("powderblue");
    } else {
      Body.setBackgroundColor("white");
      Body.setColor("black");
      event.value = "night";

      Links.setColor("blue");
    }
  }