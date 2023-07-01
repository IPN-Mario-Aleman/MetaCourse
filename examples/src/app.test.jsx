import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, vi, expect, test } from "vitest";
import FeedbackForm from "./components/FeedBackF/index";

const handleSubmit = () => {
  console.log("Form submitted!");
};

describe("Feedback Form", () => {
    afterEach(cleanup)
    test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = vi.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, { target: { value: score }})

    const commentInput = screen.getByLabelText(/Comments:/)
    fireEvent.change(commentInput, { target: { value: comment }})

    const submitButton = screen.getByRole("submit")
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalled({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = vi.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);
    
    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, { target: { value: score } })
    
    const submitButton = screen.getByRole("submit")
    fireEvent.click(submitButton)
    
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });

  // it("Testing example with vitest", () => {
  //   let apples = 0
  //   const obj = {
  //     getApples: () => 13,
  //   }

  //   const spy = vi.spyOn(obj, 'getApples').mockImplementation(() => apples)
  //   apples = 1

  //   expect(obj.getApples()).toBe(1)

  //   expect(spy).toHaveBeenCalled()
  //   expect(spy).toHaveReturnedWith(1)
  // })
});
