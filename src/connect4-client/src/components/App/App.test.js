import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("Should render texts", () => {
    render(<App />);

    expect(screen.getByText("Connect Four!")).toBeInTheDocument();
    expect(screen.getByText("Join Existing Game")).toBeInTheDocument();
    expect(screen.getByText("Start Local co-op Game")).toBeInTheDocument();
    expect(screen.getByText("Start Multiplayer Game")).toBeInTheDocument();
});
