const puppie = document.querySelector(".puppie");

let margin_top = 0;
let margin_left = 0;

let isMoving = false;
let interval;
let direction;

puppie.addEventListener("click", (e) => {
  direction = e.target.classList[1];
  correct_moving(direction);
});

let correct_moving = (dr) => {
  if (isMoving) {
    clearInterval(interval);
    interval = setInterval(
      () => moving(direction, margin_top, margin_left),
      10
    );
  } else {
    interval = setInterval(
      () => moving(direction, margin_top, margin_left),
      10
    );
    return (isMoving = true);
  }
};

let check_collision = (dr, mt, ml) => {
  let new_dr = dr;
  if (mt < 0) {
    switch (dr) {
      case "left_top":
        return (new_dr = "left_bot");
      case "right_top":
        return (new_dr = "right_bot");
    }
  } else if (mt > 610) {
    switch (dr) {
      case "left_bot":
        return (new_dr = "left_top");
      case "right_bot":
        return (new_dr = "right_top");
    }
  } else if (ml < 0) {
    switch (dr) {
      case "left_top":
        console.log(direction);
        return (new_dr = "right_top");
      case "left_bot":
        console.log(direction);
        return (new_dr = "right_bot");
    }
  } else if (ml > 1010) {
    switch (dr) {
      case "right_top":
        return (new_dr = "left_top");
      case "right_bot":
        return (new_dr = "left_bot");
    }
  } else return new_dr;
};

let moving = (dr, mt, ml) => {
  console.log(mt, ml);
  direction = check_collision(dr, mt, ml);
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
