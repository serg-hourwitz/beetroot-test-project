import setError from "./error.js";

const registrationFormLeft = () => {
  const DOMFormLeft = document.getElementById("js-form-left");
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const CITY_REGEX = /^[a-zA-Z\s]*$/;


  if (!DOMFormLeft) return;

  DOMFormLeft.addEventListener("submit", (e) => {
    e.preventDefault();

    const formLeft = new FormData(e.target);

    // first name
    const fname = formLeft.get("fname");

    if (!fname) {
      return setError("js-left-form-fname-error", "First name is required");
    }

    if (fname.length < 3) {
      return setError(
        "js-left-form-fname-error",
        "First name must be at least 3 characters"
      );
    }
    setError("js-left-form-fname-error", "");

    // last name
    const lname = formLeft.get("lname");

    if (!lname) {
      return setError("js-left-form-lname-error", "Last name is required");
    }

    if (lname.length < 3) {
      return setError(
        "js-left-form-lname-error",
        "Last name must be at least 3 characters"
      );
    }
    setError("js-left-form-lname-error", "");

    // e-mail
    const email = formLeft.get("email");

    if (!email) {
      return setError("js-left-form-email-error", "enter email");
    }

    const emailCheckResult = EMAIL_REGEX.test(email);
    if (!emailCheckResult) {
      return setError("js-left-form-email-error", "correct email");
    }

    setError("js-left-form-email-error", "");

    //  gender
    const sex = formLeft.get("sex");
    console.log("sex", sex);

    // country
    const country = formLeft.get("country");
    if (country === 'Select') {
      return setError("js-left-form-country-error", "select country");
    }

    setError("js-left-form-country-error", "");

    // city
    const city = formLeft.get("city");
    const checkCityResult = CITY_REGEX.test(city);


    if (!city) {
      return setError("js-left-form-city-error", "enter city");
    }

    if (city.length < 2) {
      return setError(
        ("js-left-form-city-error", "city must be at least 2 characters")
      );
    }

    if (!checkCityResult) {
      return setError("js-right-form-city-error", "enter correct city name");
    }

    setError("js-left-form-city-error", "");
  });
};

// export default registrationFormLeft;
