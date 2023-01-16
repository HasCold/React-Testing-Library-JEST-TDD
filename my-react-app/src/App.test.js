// You can get the updated information by the official website :- https://testing-library.com/docs/queries/about

import { logRoles, render, screen } from '@testing-library/react';
import App from './App';

// File Extension name will be :- .test.js, .spec.js, .js(_test_) --> folder which will recognize by JEST

test('Test 1', () => {   // test() -->> global function from testing-library 
  render(<App/>)
  logRoles(screen.getByTestId("myrootid"));
  const buttonElement = screen.queryByRole("button", {name : "Test Button", exact : false});
  expect(buttonElement).not.toBeInTheDocument()  // expect() provided by JEST ; toBeInTheDocument() method is called matcher and  will provided by JEST-DOM
});

// If we want to find the element role so we have a "logRoles" method
// If we want to get the ul, li, p tag so we have a "ByText" method