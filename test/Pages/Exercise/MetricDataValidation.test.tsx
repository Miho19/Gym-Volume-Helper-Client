import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { isDateValid } from "../../../src/Components/Exercise/Individual/MetricFormDateValidation";
import { isWeightValid } from "../../../src/Components/Exercise/Individual/MetricFormWeightValidation";

import { convertDateToInputStringFormat } from "../../../src/Utility/DateFormat";

describe("Metric Form Data Validation", () => {
  describe("Date Validation", () => {
    it("allow date in past", () => {
      const currentDateFormatted = convertDateToInputStringFormat(
        new Date("2025-01-01").toString()
      );
      const result = isDateValid(currentDateFormatted);

      expect(result).toBeTruthy();
    });

    it("disallow dates too far in past", () => {
      const currentDateFormatted = convertDateToInputStringFormat(
        new Date("2024-01-01").toString()
      );
      const result = isDateValid(currentDateFormatted);

      expect(result).toBeFalsy();
    });

    it("not allow dates in future", () => {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 1);

      const currentDateFormatted = convertDateToInputStringFormat(
        currentDate.toString()
      );
      const result = isDateValid(currentDateFormatted);

      expect(result).toBeFalsy();
    });

    it("not allow dates in future", () => {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 1);

      const currentDateFormatted = convertDateToInputStringFormat(
        currentDate.toString()
      );
      const result = isDateValid(currentDateFormatted);

      expect(result).toBeFalsy();
    });
  });

  describe("Weight Validation", () => {
    it("should be over 0 kg", () => {
      const result = isWeightValid(0);
      expect(result).toBeFalsy();
    });

    it("accepts positive number of kg", () => {
      const result = isWeightValid(10);
      expect(result).toBeTruthy();
    });

    it("disallow unreasonable number of kg", () => {
      const result = isWeightValid(2501);
      expect(result).toBeFalsy();
    });
  });

  describe("Reps Validation", () => {
    it("greater than 0", () => {
      expect(true);
    });
  });
});
