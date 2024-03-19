const objects = () => {
  /* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
   */

  const car = {
    manufacturer: "Toyota",
    model: "Camry",
    yearOfIssue: 2022,
    averageSpeed: 60, // km per hour
    fuelTankVolume: 50, // litres
    averageFuelConsumptionPer100Km: 8, // litres
    drivers: ["Іван Петров", "Марія Іванова", "Олексій Сидоров"],
  };

  // - Метод, який виводить на екран інформацію про автомобіль.

  console.log("Information about a car: ");
  for (const key in car) {
    console.log(`${key}: ${car[key]}`);
  }
  console.log("");

  // - Додавання імені водія до списку
  car.drivers.push("Ozzy Osbourne");

  console.log("Drivers list: ");
  for (let i = 0; i < car.drivers.length; i++) {
    console.log(`${[i + 1]}. ${car.drivers[i]}`);
  }
  console.log("");

  //- Перевірка водія на наявність його імені у списку

  const isInADriverList = (driverName) => {
    if (car.drivers.includes(driverName)) {
      console.log(`${driverName} is in a drivers list.`);
    } else {
      console.log(`${driverName} is NOT in a drivers list.`);
    }
  };

  isInADriverList("Іван Петренко");
  isInADriverList("Марія Іванів");
  isInADriverList("Богдан Сидорчук");
  isInADriverList("Ozzy Osbourne");
  isInADriverList("Michael Shumaher");

  console.log("");

  /*- Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/

  const calcTimeAndFuelAmount = (distance) => {
    const averageFuelConsumptionPer100Km = 8;
    let totalFuelRequired = (distance * averageFuelConsumptionPer100Km) / 100;
    const averageSpeed = 60;
    const restTimeDuration = 1;
    let restTimes = 0;
    let baseTime = distance / averageSpeed;

    if (baseTime > 4) {
      restTimes = Math.floor(baseTime / 4);
    }

    let normalizedTimeHours =
      Math.floor(baseTime) + restTimes * restTimeDuration;
    let normalizedTimeMinutes = distance % averageSpeed;
    if (normalizedTimeMinutes === 0) {
      normalizedTimeMinutes = "00";
    }

    console.log(
      `It takes ${normalizedTimeHours} hours ${normalizedTimeMinutes} minutes and ${totalFuelRequired.toFixed(
        2
      )} litres of fuel to cover the distance ${distance} km at an average speed ${averageSpeed} km/h with a fuel consumption ${averageFuelConsumptionPer100Km} litres of 100 km.`
    );
  };

  calcTimeAndFuelAmount(120);
  calcTimeAndFuelAmount(250);
  calcTimeAndFuelAmount(525);
  calcTimeAndFuelAmount(1000);
}

export default objects;