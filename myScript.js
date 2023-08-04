const puppie = document.querySelector(".puppie");

let margin_top = 0;
let margin_left = 0;

let isMoving = true;

puppie.addEventListener("click", (e) => {
  let direction = e.target.classList[1];

  if (isMoving) {
    let move = setInterval(
      () => moving(direction, margin_top, margin_left),
      1000
    );
  } else {
    clearInterval(move), (isMoving = false);
  }
});

let moving = (direction, mt, ml) => {
  switch (direction) {
    case "right_top":
      mt -= 10;
      ml += 10;
      updatePosition(puppie, mt, ml);
      return (mt -= 10), (ml += 10);
    case "right_bot":
      mt += 10;
      ml += 10;
      updatePosition(puppie, mt, ml);
      return (mt += 10), (ml += 10);
    case "left_top":
      mt -= 10;
      ml -= 10;
      updatePosition(puppie, mt, ml);
      return (mt -= 10), (ml -= 10);
    case "left_bot":
      mt += 10;
      ml -= 10;
      updatePosition(puppie, mt, ml);
      return (mt += 10), (ml -= 10);
  }
};

let updatePosition = (arg, mt, ml) => {
  arg.style.marginTop = mt.toString() + "px";
  margin_top = mt;
  arg.style.marginLeft = ml.toString() + "px";
  margin_left = ml;
};
