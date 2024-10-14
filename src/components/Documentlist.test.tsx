import { render, screen } from "@testing-library/react";
import DocumentList from "../components/DocumentList";

const mockDocuments = [
  { type: "doc-1", title: "Document 1", position: 0 },
  { type: "doc-2", title: "Document 2", position: 1 },
];

test("renders list of documents", () => {
  render(<DocumentList documents={mockDocuments} />);
  expect(screen.getByText("Document 1")).toBeInTheDocument();
  expect(screen.getByText("Document 2")).toBeInTheDocument();
});
