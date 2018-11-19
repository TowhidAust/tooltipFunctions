function toolTip(element, text, position, offset, move) {
  $(element).mouseover(function () {
    if ((element == null) || text == null || position == null || offset == null || move == null) {
      alert("please enter all the arguments currectly");
    } else {
      // displaying the tooltip into right side
      if ((position === "right") && (offset === "default") && (move === 0)) {
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "right") && (offset === "customRightOrLeft")) {
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("left", move + "%");
      } else if ((position === "right") && (offset === "customTopOrBottom")) {
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      }
      // displaying the tooltip left side 
      else if ((position === "left") && (offset === "default")) {
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "left") && (offset === "customRightOrLeft")) {
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("right", move + "%");
      } else if ((position === "left") && (offset === "customTopOrBottom")) {
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      }
    }



    // else if (position === "left") {
    //   $(element).addClass("tooltip-right");
    //   $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    // } else if (position === "bottom") {
    //   $(element).addClass("tooltip-top");
    //   $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    // } else if (position === "top") {
    //   $(element).addClass("tooltip-bottom");
    //   $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    // } else {
    //   console.log("i am from Tooltip if else");
    // }
  });

  $(element).mouseout(function () {
    $(element).removeClass("tooltip");
    $(element).removeClass("tooltip-bottom");
    $(element).removeClass("tooltip-left");
    $(element).removeClass("tooltip-top");
    $("span").remove();
  });
}

toolTip(".div1", "i am a right tooltip", "right", "default", 0);
// toolTip(".div1", "i am a right tooltip", "right", "customTopOrBottom", 120);
// toolTip(".div2", "i am a left tooltip", "top");
// toolTip(".div3", "i am a top tooltip", "top");
// toolTip(".div4", "i am a bottom tooltip", "bottom");
// toolTip("p", "i am a tooltip paragraph", "bottom");