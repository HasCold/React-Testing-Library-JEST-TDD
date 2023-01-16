import {render, screen } from "@testing-library/react";
import CommentForm from "../components/CommentForm";
import userEvent from "@testing-library/user-event";

test("Initial Condition", () => {
    render(<CommentForm />)
const commmentInput = screen.getByRole("textbox");
expect(commmentInput).toBeInTheDocument();
const checkBox = screen.getByLabelText("i agree to terms and conditions", {exact : false})// case senstive ana ke liye exact:false krskte ha
expect(checkBox).toBeInTheDocument();
const submitButton = screen.getByRole("button", {name : "comment", exact : "false"})
expect(submitButton).toBeDisabled();
})

// 2nd Test Case

test("Enable button on type and checkbox click", async () => {
    render(<CommentForm/>)
const checkBox = screen.getByLabelText("i agree to terms and conditions", {exact : false})
const submitButton = screen.getByRole("button", {name : "comment", exact : "false"})
const commmentInput = screen.getByPlaceholderText("Write your comment here", {exact:false});

// fireEvent.change(commmentInput, {target:{value:"something"}});
await userEvent.type(commmentInput, "something");
await userEvent.click(checkBox);

expect(submitButton).toBeEnabled();

await userEvent.click(checkBox);
expect(submitButton).toBeDisabled();

})