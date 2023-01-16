import {render, screen } from "@testing-library/react";
import CommentList from "../components/CommentList";

test("Comments are not available", () => {
    render(<CommentList allcomments={[]} />)
    const h2Element = screen.getByText("no comments", {exact:false})  // case senstive ana ke liye exact:false krskte ha 
    expect(h2Element).toBeInTheDocument();
})

test("List all comments", () => {
   const comments = [  // ARRAY OF OBJECTS MA COMMENT PROVIDE KARENGE
        {id:1, text:"Comment 1"},
        {id:2, text:"Comment 2"}
    ]
    render(<CommentList allcomments={comments} />)
    const h2Element = screen.queryByText("no comments", {exact:false})  // case senstive ana ke liye exact:false krskte ha 
    expect(h2Element).not.toBeInTheDocument();

    expect(screen.getByText("Comment 1")).toBeInTheDocument();
    expect(screen.getByText("Comment 2")).toBeInTheDocument();
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(comments.length);  // toEqual -->> when you want to check two objects have same value; toBe -->> Checks that a value is what you expect. It uses Object.is to check strict equality. Don't use toBe with floating-point numbers.

})

