function checkCashRegister(price, cash, cid) {

  // each number is written as string

  let change = (cash - price).toFixed(2);
  const cidSum = (cid.reduce((acc, curr) => acc + curr[1], 0)).toFixed(2);
  
  // change array cid into object
  const cidObj = {};  
  cid.forEach(el => cidObj[el[0]] = el[1].toFixed(2));
  // how much pennies (<1) do we have in cash register
  const cidSumPennies = (Number(cidObj["PENNY"]) + Number(cidObj["NICKEL"]) + Number(cidObj["DIME"]) + Number(cidObj["QUARTER"])).toFixed(2); 

  // If not enough cash in cash register
  if (Number(change) > Number(cidSum)) {
    return ({
      status: "INSUFFICIENT_FUNDS",
      change: []
    });
  };

  // Check if we have enough pennies (< 1)
  if ((Number(change) * 100 - Math.floor(Number(change))*100) > Number(cidSumPennies) * 100) {
    return ({
      status: "INSUFFICIENT_FUNDS",
      change: []
    });
  };

  // if we have exact cash we have to give in change
  if (Number(change) === Number(cidSum)) {
    return ({
      status: "CLOSED",
      change: cid
    })
  }
  
  // if there is no change
  if (Number(change) === 0) {
    return ({
      status: "OPEN",
      change: []
    })
  }
  
  // change as object
  let changeObj = {};
  for (const money in cidObj) {
    changeObj[money] = '0.00';
  }


  // helper function
  function changeData(name, value) {
    changeObj[name] = (Number(changeObj[name]) + value).toFixed(2);
    cidObj[name] = (Number(cidObj[name]) - value).toFixed(2);
    change = (Number(change) - value).toFixed(2);
  }

  // let's count the change
  while (Number(change) > 0) {    

    if (Number(change) >= 100 && Number(cidObj["ONE HUNDRED"]) >= 100) {
      changeData("ONE HUNDRET", 100);
    } else if (Number(change) >= 20 && Number(cidObj["TWENTY"]) >= 20) {
      changeData("TWENTY", 20);
    } else if (Number(change) >= 10 && Number(cidObj["TEN"]) >= 10) {
      changeData("TEN", 10);
    } else if (Number(change) >= 5 && Number(cidObj["FIVE"]) >= 5) {
      changeData("FIVE", 5);
    } else if (Number(change) >= 1 && Number(cidObj["ONE"]) >= 1) {
      changeData("ONE", 1);
    } else if (Number(change) >= 0.25 && Number(cidObj["QUARTER"]) >= 0.25) {
      changeData("QUARTER", 0.25);
    } else if (Number(change) >= 0.1 && Number(cidObj["DIME"]) >= 0.1) {
      changeData("DIME", 0.1);
    } else if (Number(change) >= 0.05 && Number(cidObj["NICKEL"]) >= 0.05) {
      changeData("NICKEL", 0.05);
    } else if (Number(change) >= 0.01 && Number(cidObj["PENNY"]) >= 0.01) {
      changeData("PENNY", 0.01);
    }    
  } // end of while()
  // and change return:
  return {
    status: "OPEN",
    change: Object.keys(changeObj).map((key) => [key, Number(changeObj[key])]).filter(el => el[1] > 0).sort((a,b) => b[1] - a[1])
  };

}



console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
