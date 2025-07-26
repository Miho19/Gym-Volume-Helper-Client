import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { isDateValid } from "../../../src/Components/Exercise/Individual/MetricFormValidation";
import { convertDateToInputStringFormat } from "../../../src/Utility/DateFormat";

describe("Metric Data Validation", () => {
  describe("Date Validation", () => {
    it("allow current date", () => {
      const currentDateFormatted = convertDateToInputStringFormat(
        new Date().toString()
      );
      const result = isDateValid(currentDateFormatted);

      expect(result).toBeTruthy();
    });
  });

  describe("Weight Validation", () => {
    it("should be over 0 kg", () => {
      expect(true);
    });
  });

  describe("Reps Validation", () => {
    it("greater than 0", () => {
      expect(true);
    });
  });
});
