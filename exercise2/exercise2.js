var x = 1;

function next()
{
    x = x + 1;
    switch(x) {
        case 2:
            document.getElementById("imgppt").src="2.jpg";
            break;
        case 3:
            document.getElementById("imgppt").src="3.jpg";
            break;
        case 4:
            document.getElementById("imgppt").src="4.jpg";
            break;
        case 5:
            document.getElementById("imgppt").src="5.jpg";
            break;
        case 6:
            x = 1;
            document.getElementById("imgppt").src="1.jpg";
            break;
        default:
            document.getElementById("imgppt").src="1.jpg";
    }
}

function previous()
{
  x = x - 1;
  switch(x) {
      case 2:
          document.getElementById("imgppt").src="2.jpg";
          break;
      case 3:
          document.getElementById("imgppt").src="3.jpg";
          break;
      case 4:
          document.getElementById("imgppt").src="4.jpg";
          break;
      case 0:
          x = 5;
          document.getElementById("imgppt").src="5.jpg";
          break;
      case 1:
          document.getElementById("imgppt").src="1.jpg";
          break;
      default:
          document.getElementById("imgppt").src="1.jpg";
  }
}
