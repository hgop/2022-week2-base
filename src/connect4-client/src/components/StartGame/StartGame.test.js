import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StartGame } from "./StartGame.tsx";

import { MockGameClient } from "../../external_services/game_api_client";

it("should render basic texts", () => {
  render(
    <StartGame
      startLocalGame={() => MockGameClient.startLocalGame()}
      startMultiplayerGame={() => MockGameClient.startMultiplayerGame()}
      joinGame={(value) => MockGameClient.joinGame(value)}
    />
  );

  expect(screen.getByText("Connect Four!")).toBeInTheDocument();
  expect(screen.getByText(`Join Existing Game`)).toBeInTheDocument();
  expect(screen.getByText("Start Local co-op Game")).toBeInTheDocument();
  expect(screen.getByText("Start Multiplayer Game")).toBeInTheDocument();
});
