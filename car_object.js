// create object for car dealership with:
// 3 car models: sedan, suv, sports
// rental price for each
// avail or not
// total num avail for each category
// ablility to submit a rental request

rentals = {
  sedan: {
    model: 'Honda Accord',
    cost: 59,
    numAvail: 5,
    available: true,
  },
  suv: {
    model: 'Jeep Cherokee',
    cost: 79,
    numAvail: 4,
    available: true
  },
  sports: {
    model: 'Infinity G35',
    cost: 99,
    numAvail: 0,
    available: false
  },
  request: function(type) {
    if (type.available === true) {
      console.log("The " + type.model + " is available to rent! The cost is " + type.cost + " dollars, and there are " + type.numAvail + " available.");

    } else {
      console.log("Sorry, the " + type.model + " is not available.");
    }
  }
};

rentals.request(rentals.sedan);
rentals.request(rentals.suv);
rentals.request(rentals.sports);



