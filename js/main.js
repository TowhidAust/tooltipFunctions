function toolTip(element, text, position) {
  $(element).mouseover(function () {
    $("#book").slideDown("slow", function () {});


    if (position === "right") {
      $(element).addClass("tooltip");
      $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    } else if (position === "left") {
      $(element).addClass("tooltip-right");
      $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    } else if (position === "bottom") {
      $(element).addClass("tooltip-top");
      $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    } else if (position === "top") {
      $(element).addClass("tooltip-bottom");
      $(element).append(`<span class="tooltiptext"> ${text} </span>`);
    } else {
      console.log("i am from Tooltip if else");
    }
  });

  $(element).mouseout(function () {
    $(element).removeClass("tooltip");
    $(element).removeClass("tooltip-bottom");
    $(element).removeClass("tooltip-left");
    $(element).removeClass("tooltip-top");
    $("span").remove();
  });
}

toolTip(".div1", "i am a tooltip", "right");
toolTip(".div2", "i am a tooltip", "left");
toolTip(".div3", "i am a tooltip", "top");
toolTip(".div4", "i am a tooltip", "bottom");
toolTip("p", "i am a tooltip paragraph", "bottom");