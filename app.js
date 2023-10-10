let select = document.querySelector(".currency1");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let result = document.getElementById("result");
/* let reset = document.createElement("button");
reset.id = "reset-btn"; */

btn.addEventListener("click", () => {
  if (btn.innerHTML === "Convert") {
    let INR_val = input.value;
    let to_be_converted = select.value;

    if (!INR_val || !to_be_converted) {
      alert("Fill INR value and select currency to be converted!");
      return;
    }
    console.log(to_be_converted, INR_val);
    const converted_amt = convertINR(INR_val, to_be_converted);
    console.log(converted_amt);

    let text = `${INR_val} Indian Rupees is equivalent to ${converted_amt} ${to_be_converted}`;
    let reset_text = "Reset";
    result.innerHTML = text;
    result.style.padding = "1rem";
    /*  document.getElementsByClassName("center")[0].appendChild(reset);
    document.getElementById("reset-btn").innerHTML = reset_text; */
    btn.innerHTML = "Reset";
  } else if (btn.innerHTML === "Reset") {
    location.reload();
  }
});

function convertINR(amount, to_be_converted) {
  let converted_amt = 0;
  switch (to_be_converted) {
    case "USD":
      converted_amt = (amount / 83.26).toFixed(2);
      break;
    case "EUR":
      converted_amt = (amount / 88.06).toFixed(2);
      break;
    case "GBP":
      converted_amt = (amount / 101.94).toFixed(2);
      break;
    case "YEN":
      converted_amt = (amount * 1.79).toFixed(2);
      break;
    case "WON":
      converted_amt = (amount * 16.19).toFixed(2);
      break;
    default:
      throw new Error("Unknow option");
  }
  return converted_amt;
}
