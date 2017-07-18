// create object for car dealership with:
// 3 car models: sedan, suv, sports
// rental price for each
// avail or not
// total num avail for each category
// ablility to submit a rental request

rentals = {
  sedan: {
    cost: 59,
    numAvail: 5,
    available: true
  },
  suv: {
    cost: 79,
    numAvail: 4,
    available: true
  },
  sports: {
    cost: 99,
    numAvail: 0,
    available: false
  },
  request: function(type) {
    if (type.available === true) {
      console.log("This vehicle is available to rent, the cost is " + type.cost + " dollars.");
    } else {
      console.log("Sorry, this model is not available.");
    }
  }
};

rentals.request(rentals.suv);

