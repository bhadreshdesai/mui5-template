[Get Locale Short Date Format using javascript](https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript)

```javascript
/**
 * Get the date format pattern for the given locale.
 * @example
 *     getDateFormatPattern('en-AU');   // dd/mm/yyyy
 *     getDateFormatPattern('en-US');   // m/d/yyyy
 */
const getDateFormatPattern = (locale: string) => {
  const getPatternForPart = (part: Intl.DateTimeFormatPart) => {
    switch (part.type) {
      case "day":
        return "d".repeat(part.value.length);
      case "month":
        return "m".repeat(part.value.length);
      case "year":
        return "y".repeat(part.value.length);
      case "literal":
        return part.value;
      default:
        console.log("Unsupported date part", part);
        return "";
    }
  };

  return new Intl.DateTimeFormat(locale)
    .formatToParts(new Date("2021-01-01"))
    .map(getPatternForPart)
    .join("");
};
```

```javascript
const getDateFormatPattern = (locale: string) => {
  const getPatternForPart = (part: Intl.DateTimeFormatPart) => {
    switch (part.type) {
      case "day":
        return "d".repeat(part.value.length);
      case "month":
        return "m".repeat(part.value.length);
      case "year":
        return "y".repeat(part.value.length);
      case "literal":
        return part.value;
      default:
        console.log("Unsupported date part", part);
        return "";
    }
  };

  return new Intl.DateTimeFormat(locale)
    .formatToParts(new Date("2021-01-01"))
    .map(getPatternForPart)
    .join("");
};

var locale;
//locale
console.log("Default: " + getDateFormatPattern(locale));
locale = "en";
console.log(locale + ": " + getDateFormatPattern(locale));
locale = "en-US";
console.log(locale + ": " + getDateFormatPattern(locale));
locale = "en-GB";
console.log(locale + ": " + getDateFormatPattern(locale));
locale = "au";
console.log(locale + ": " + getDateFormatPattern(locale));
locale = "sk";
console.log(locale + ": " + getDateFormatPattern(locale));
```
