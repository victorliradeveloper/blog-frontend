import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import SearchPost from "./SearchPost";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useQueryClient: jest.fn(),
}));

describe("SearchPost", () => {
  const pushMock = jest.fn();
  const prefetchQueryMock = jest.fn().mockResolvedValue(undefined);
  const queryClientMock = {
    prefetchQuery: prefetchQueryMock,
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    (useQueryClient as jest.Mock).mockReturnValue(queryClientMock);
    jest.clearAllMocks();
  });

  it("does not render when displaySearch is false", () => {
    render(
      <SearchPost
        displaySearch={false}
        onCloseSearch={jest.fn()}
        onCloseMobileMenu={jest.fn()}
      />
    );
    expect(screen.queryByPlaceholderText("Search")).toBeNull();
  });

  it("renders input when displaySearch is true", () => {
    render(
      <SearchPost
        displaySearch
        onCloseSearch={jest.fn()}
        onCloseMobileMenu={jest.fn()}
      />
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("executes search and calls onCloseSearch when pressing Enter", async () => {
    const onCloseSearch = jest.fn();

    render(
      <SearchPost
        displaySearch
        onCloseSearch={onCloseSearch}
        onCloseMobileMenu={jest.fn()}
      />
    );

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(prefetchQueryMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith("/?query=react");
    expect(onCloseSearch).toHaveBeenCalled();
  });
});
