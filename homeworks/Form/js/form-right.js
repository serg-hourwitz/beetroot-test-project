import setError from "./error.js";

const registrationFormRight = () => {
  const DOMFormRight = document.getElementById("js-form-right");
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_REGEX = /^\d{10}$/;
  const ZIP_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;
  const CITY_REGEX = /^[a-zA-Z\s]*$/;

  if (!DOMFormRight) return;

  DOMFormRight.addEventListener("submit", (e) => {
    e.preventDefault();

    const formRight = new FormData(e.target);

    // file
    const file = formRight.get("file");
    console.log(file);

    if (file.name === "") {
      return setError("js-right-form-file-error", "select a file");
    }

    if (file.size > 1000000) {
      return setError("js-right-form-file-error", "file is too big");
    }

    setError("js-right-form-file-error", "");

    // name
    const name = formRight.get("name");

    if (!name) {
      return setError("js-right-form-name-error", "name is required");
    }

    if (name.length < 3) {
      return setError(
        "js-right-form-name-error",
        "name must be at least 3 characters"
      );
    }
    setError("js-right-form-name-error", "");

    // e-mail
    const email = formRight.get("email");

    if (!email) {
      return setError("js-right-form-email-error", "enter email");
    }

    const emailCheckResult = EMAIL_REGEX.test(email);
    if (!emailCheckResult) {
      return setError("js-right-form-email-error", "correct email");
    }

    setError("js-right-form-email-error", "");

    // country
    const country = formRight.get("country");
    if (country === "Select") {
      return setError("js-right-form-country-error", "select country");
    }

    setError("js-right-form-country-error", "");

    // city
    const city = formRight.get("city");
    const checkCityResult = CITY_REGEX.test(city);

    if (!city) {
      return setError("js-right-form-city-error", "enter city");
    }

    if (city.length < 2) {
      return setError(
        ("js-right-form-city-error", "city must be at least 2 characters")
      );
    }

    if (!checkCityResult) {
      return setError("js-right-form-city-error", "enter correct city name");
    }

    setError("js-right-form-city-error", "");

    // zip

    const zip = formRight.get("zip");
    const zipCheckResult = ZIP_REGEX.test(zip);

    if (!zip) {
      return setError("js-right-form-zip-error", "enter zip code");
    }

    if (!zipCheckResult) {
      return setError("js-right-form-zip-error", "enter correct zip code");
    }
    setError("js-right-form-zip-error", "");

    // phone

    const phone = formRight.get("phone");
    const phoneCheckResult = PHONE_REGEX.test(phone);

    if (!phone) {
      return setError("js-right-form-phone-error", "enter phone");
    }

    if (!phoneCheckResult) {
      return setError("js-right-form-phone-error", "enter correct phone");
    }
    setError("js-right-form-phone-error", "");
  });
};

export default registrationFormRight;
