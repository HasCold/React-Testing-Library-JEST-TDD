// ******************** Integration Testing ********************

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../APP_Project/App";

test("Comments gets displayed after submitting",async () => {
    render(<App />)
    const checkBox = screen.getByLabelText("i agree to terms and conditions", {exact : false})// case senstive ana ke liye exact:false krskte ha
    const submitButton = screen.getByRole("button", {name : "comment", exact : "false"})
    const commmentInput = screen.getByPlaceholderText("write your comment here", {exact:false});

    await userEvent.type(commmentInput, 'nice pic dear');
    await userEvent.click(checkBox);
    await userEvent.click(submitButton);

    // const commentLi = screen.getByText("nice pic dear", {exact:false});
    const commentLi = await screen.findByText("nice pic dear", {exact:false});
    expect(commentLi).toBeInTheDocument();

});

test("2 Comments gets displayed after submitting",async () => {
    render(<App />)
    const checkBox = screen.getByLabelText("i agree to terms and conditions", {exact : false})// case senstive ana ke liye exact:false krskte ha
    const submitButton = screen.getByRole("button", {name : "comment", exact : "false"})
    const commmentInput = screen.getByPlaceholderText("write your comment here", {exact:false});

    await userEvent.type(commmentInput, 'nice pic dear');
    await userEvent.click(checkBox);
    await userEvent.click(submitButton);

    await userEvent.clear(commmentInput);

await userEvent.type(commmentInput, "awesome")
await userEvent.click(submitButton)

await waitFor(() => {
    const commentLi = screen.getAllByRole("listitem");
        expect(commentLi.length).toBe(2);
})
});