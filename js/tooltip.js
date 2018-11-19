/* ------------------------------------------------------------------------------
            1: (element) select the element || by default it will be "relative"
            2: (text) write the text for your tooltip
            3: (position) position it where to place the tooltip || right left top or bottom
            4: (offset) set custom offset for moving the tooltip customRightOrLeft customTopOrBottom
            5: (move)finally set the integer value for move
            6:function pattern: toolTip(element, text, position, offset, move);
            
  --------------------------------------------------------------------------------
            => by default this block of code will be executed.
            => condition: set the offset to "default" in the function argument.
            => function pattern: toolTip(element, text, position, offset, move);
  -----------------------------------------------------------------------------
    */








function toolTip(element, text, position, offset, move) {
  $(element).mouseover(function () {
    // checking the arguments placed perfectly
    if ((element == null) || text == null || position == null || offset == null || move == null) {
      alert("please enter all the arguments currectly");
    } else {

      if ((position === "right") && (offset === "default") && (move === 0)) {
        // default tooltip
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "right") && (offset === "customRightOrLeft")) {
        // custom tooltip for moving right or left
        // positive value move right||negative value move left
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("left", move + "%");
      } else if ((position === "right") && (offset === "customTopOrBottom")) {
        // custom tooltip for moving top or bottom
        // positive value move top||negative value move bottom
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      } else if ((position === "left") && (offset === "default") && (move === 0)) {
        // default tooltip
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "left") && (offset === "customRightOrLeft")) {
        // custom tooltip for moving right or left
        // positive value move left||negative value move right
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("right", move + "%");
      } else if ((position === "left") && (offset === "customTopOrBottom")) {
        // custom tooltip for moving top or bottom
        // positive value move top||negative value move bottom
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

toolTip(".div1", "i am a right tooltip", "right", "customRightOrLeft", 105);