const puppie = document.querySelector(".puppie");

let margin_top = 0;
let margin_left = 0;

let isMoving = false;
let interval;

puppie.addEventListener("click", (e) => {
  let direction = e.target.classList[1];
  correct_moving(direction);
});

let correct_moving = (direction) => {
  if (isMoving) {
    clearInterval(interval);
    interval = setInterval(
      () => moving(direction, margin_top, margin_left),
      1000
    );
  } else {
    interval = setInterval(
      () => moving(direction, margin_top, margin_left),
      1000
    );
    return (isMoving = true);
  }
};

let check_collision = (direction, mt, ml) => {
  let new_direction = direction;
  if (mt < 0) {
    switch (direction) {
      case "left_top":
        return (new_direction = "left_bot");
      case "right_top":
        return (new_direction = "right_bot");
    }
  } else if (mt > 800) {
    switch (direction) {
      case "left_bot":
        return (new_direction = "left_top");
      case "right_bot":
        return (new_direction = "right_top");
    }
  } else if (ml < 0) {
    switch (direction) {
      case "left_top":
        console.log(direction);
        return (new_direction = "right_top");
      case "left_bot":
        console.log(direction);
        return (new_direction = "right_bot");
    }
  } else if (ml > 1200) {
    switch (direction) {
      case "right_top":
        return (new_direction = "left_top");
      case "right_bot":
        return (new_direction = "left_bot");
    }
  } else return new_direction;
};

let moving = (direction, mt, ml) => {
  console.log(mt, ml);
  let new_direction = check_collision(direction, mt, ml);
  switch (new_direction) {
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
