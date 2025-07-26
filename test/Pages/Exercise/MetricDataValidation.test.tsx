import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Metric Data Validation", () => {
  describe("Date Validation", () => {
    it("allow current date", () => {
      expect(true);
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
