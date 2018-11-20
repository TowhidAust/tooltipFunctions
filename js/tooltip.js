/* ------------------------------------------------------------------------------
            1: (element) select the element || by default it will be "relative"
            2: (text) write the text for your tooltip
            3: (position) position it where to place the tooltip || right left top or bottom
            4: (offset) set custom offset for moving the tooltip customRightOrLeft customTopOrBottom
            5: (move)finally set the integer value for move
            6:function pattern: toolTip(element, text, position, offset, move);
            
  --------------------------------------------------------------------------------
            1. how to use???
            ---------------default tooltips example:------------------------
            => toolTip(".div1", "i am a tooltip", "right", "default", 0);
            => toolTip(".div1", "i am a tooltip", "left", "default", 0);
            => toolTip(".div1", "i am a tooltip", "top", "default", 0);
            => toolTip(".div1", "i am a tooltip", "bottom", "default", 0);
            ----------------custom tooltip example---------------------------
            customRightOrLeft:(right)
            => toolTip(".div1", "i am a tooltip", "top", "customRightOrLeft", 105);
            customTopOrBottom: (right)
            => toolTip(".div1", "i am a tooltip", "top", "customTopOrBottom", -105);

            customRightOrLeft: (left)
            => toolTip(".div1", "i am a tooltip", "top", "customRightOrLeft", -105);
            customTopOrBottom:
            => toolTip(".div1", "i am a tooltip", "top", "customTopOrBottom", 105);

            customRightOrLeft:(top)
            => toolTip(".div1", "i am a tooltip", "top", "customRightOrLeft", -105);
            customTopOrBottom: (top)
            => toolTip(".div1", "i am a tooltip", "top", "customTopOrBottom", -105);

            customRightOrLeft: (bottom)
            => toolTip(".div1", "i am a tooltip", "top", "customRightOrLeft", 105);
            customTopOrBottom: (bottom)
            => toolTip(".div1", "i am a tooltip", "top", "customTopOrBottom", 105);


  -----------------------------------------------------------------------------
    */



function toolTip(element, text, position, offset, move) {
  $(element).mouseover(function () {
    // checking the arguments placed perfectly
    if ((element == null) || text == null || position == null || offset == null || move == null) {
      alert("please enter all the arguments currectly");
    } else {
      if ((position === "right") && (offset === "default") && (move === 0)) {
        // default tooltip right
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "right") && (offset === "customRightOrLeft")) {
        // custom move tooltip move right or left
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("left", move + "%");
      } else if ((position === "right") && (offset === "customTopOrBottom")) {
        // custom move tooltip top or bottom
        $(element).addClass("tooltip");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      } else if ((position === "left") && (offset === "default") && (move === 0)) {
        // deault tooltip left
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "left") && (offset === "customRightOrLeft")) {
        // custom move right or left
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("right", move + "%");
      } else if ((position === "left") && (offset === "customTopOrBottom")) {
        // custom move top or bottom
        $(element).addClass("tooltip-right");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      } else if ((position === "top") && (offset === "default") && (move === 0)) {
        // default tooltip top
        $(element).addClass("tooltip-bottom");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "top") && (offset === "customRightOrLeft")) {
        // custom move right or left
        $(element).addClass("tooltip-bottom");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("margin-left", move + "%");
      } else if ((position === "top") && (offset === "customTopOrBottom")) {
        // custom move top or bottom
        $(element).addClass("tooltip-bottom");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("bottom", move + "%");
      } else if ((position === "bottom") && (offset === "default") && (move === 0)) {
        // default tooltip
        $(element).addClass("tooltip-top");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
      } else if ((position === "bottom") && (offset === "customRightOrLeft")) {
        // custom move left or right
        $(element).addClass("tooltip-top");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("margin-left", move + "%");
      } else if ((position === "bottom") && (offset === "customTopOrBottom")) {
        // custom move top or bottom
        $(element).addClass("tooltip-top");
        $(element).append(`<span class="tooltiptext"> ${text} </span>`);
        $(".tooltiptext").css("top", move + "%");
      }
    }
  });
  // removeing the class after mouse out to disappear
  $(element).mouseout(function () {
    $(element).removeClass("tooltip");
    $(element).removeClass("tooltip-bottom");
    $(element).removeClass("tooltip-left");
    $(element).removeClass("tooltip-top");
    $("span").remove();
  });
}

toolTip(".div2", "i am a tooltip lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet lorem jashdf ipsum dolor sinet i am lorem ipsum habijabi sinet color dhfa", "left", "customRightOrLeft", 105);

// toolTip(".div1", "i am a tooltip", "right", "default", 0);
//toolTip(".div1", "i am a tooltip", "left", "default", 0);
//toolTip(".div1", "i am a tooltip", "top", "default", 0);
//toolTip(".div1", "i am a tooltip", "bottom", "default", 0);



// customRightOrLeft:(right)
// toolTip(".div1", "i am a tooltip", "right", "customRightOrLeft", 105);
// customTopOrBottom: (right)
// toolTip(".div1", "i am a tooltip", "right", "customTopOrBottom", -105);

// customRightOrLeft: (left)
// => toolTip(".div1", "i am a tooltip", "left", "customRightOrLeft", 105);
// customTopOrBottom:
// => toolTip(".div1", "i am a tooltip", "left", "customTopOrBottom", -105);

// customRightOrLeft:(top)
// => toolTip(".div1", "i am a tooltip", "top", "customRightOrLeft", 105);
// customTopOrBottom: (top)
// => toolTip(".div1", "i am a tooltip", "top", "customTopOrBottom", -105);

// customRightOrLeft: (bottom)
// => toolTip(".div1", "i am a tooltip", "bottom", "customRightOrLeft", 105);
// customTopOrBottom: (bottom)
// => toolTip(".div1", "i am a tooltip", "bottom", "customTopOrBottom", -105);