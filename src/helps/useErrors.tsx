import { I18n } from "@lingui/core";

export type NameKeyType =
  | "eventName"
  | "location"
  | "finish"
  | "aboutEvent"
  | "errorMessage"
  | "title"
  | "description"
  | "phoneNumber"
  | "place"
  | "types"
  | "category"
  | "price"
  | "brand"
  | "mileage"
  | "yearRelease"
  | "typeFuel"
  | "typeTransmission"
  | "typeParts"
  | "images";

export const useErrors = (i18n: I18n) => {
  const getErrorText = (
    type: NameKeyType,
    options: { min?: number; max?: number; otherName?: string }
  ) => {
    const { min, max, otherName } = options;
    if (i18n) {
      if (type === "eventName")
        return {
          name: i18n._("Name of the {otherName}", { otherName }),
          title: i18n._(
            `The text must contain a minimum of {min} and a maximum of {max} characters.`,
            { min, max }
          ),
        };
      if (type === "location")
        return {
          name: i18n._("The place of the {otherName}", { otherName }),
          title: i18n._("The location of the {otherName} must be selected.", {
            otherName,
          }),
        };
      if (type === "finish")
        return {
          name: i18n._("Date of the {otherName}", { otherName }),
          title: i18n._("The end date must be greater than the start date."),
        };
      if (type === "aboutEvent")
        return {
          name: i18n._("Tell us about the {otherName}", { otherName }),
          title: i18n._(
            "The text must contain a minimum of {min} and a maximum of {max} characters.",
            { min, max }
          ),
        };
      if (type === "title")
        return {
          name: i18n._("Name of the {otherName}", { otherName }),
          title: i18n._(
            "The text must contain a minimum of {min} and a maximum of {max} characters.",
            { min, max }
          ),
        };
      if (type === "place")
        return {
          name: i18n._("The place of the {otherName}", { otherName }),
          title: i18n._("The location of the {otherName} must be selected.", {
            otherName,
          }),
        };
      if (type === "description")
        return {
          name: i18n._("Description of the {otherName}", { otherName }),
          title: i18n._(
            "The text must contain a minimum of {min} and a maximum of {max} characters.",
            { min, max }
          ),
        };
      if (type === "phoneNumber")
        return {
          name: i18n._("Phone number the {otherName}", { otherName }),
          title: i18n._("Please enter phone number"),
        };
      if (type === "types")
        return {
          name: i18n._("Types of {otherName} jobs", { otherName }),
          title: i18n._("Please select at least one type"),
        };
      if (type === "price")
        return {
          name: i18n._("Price {otherName}", { otherName }),
          title: i18n._("Please enter price for {otherName}", { otherName }),
        };
      if (type === "category")
        return {
          name: i18n._("Category {otherName}", { otherName }),
          title: i18n._("Please enter category for {otherName}", { otherName }),
        };
      if (type === "brand")
        return {
          name: i18n._("Brand {otherName}", { otherName }),
          title: i18n._("Please enter brand for {otherName}", { otherName }),
        };
      if (type === "mileage")
        return {
          name: i18n._("Mileage {otherName}", { otherName }),
          title: i18n._("Please enter mileage for {otherName}", { otherName }),
        };
      if (type === "yearRelease")
        return {
          name: i18n._("Year release {otherName}", { otherName }),
          title: i18n._(
            "Please enter year minimum of {min} and a maximum of {max} for {otherName}",
            { otherName, min, max }
          ),
        };
      if (type === "typeFuel")
        return {
          name: i18n._("Type fuel {otherName}", { otherName }),
          title: i18n._("Please enter type fuel for {otherName}", {
            otherName,
          }),
        };
      if (type === "typeTransmission")
        return {
          name: i18n._("Type transmission {otherName}", { otherName }),
          title: i18n._("Please enter type transmission for {otherName}", {
            otherName,
          }),
        };
      if (type === "typeParts")
        return {
          name: i18n._("Type parts {otherName}", { otherName }),
          title: i18n._("Please enter type parts for {otherName}", {
            otherName,
          }),
        };
      if (type === "errorMessage")
        return { name: "", title: i18n._("Incorrectly entered data") };
      if (type === "images")
        return {
          name: i18n._("Images {otherName}", { otherName }),
          title: i18n._("Please add images for {otherName}", { otherName }),
        };
      return { name: "", title: "" };
    }
    return { name: "", title: "" };
  };

  return { getErrorText };
};
