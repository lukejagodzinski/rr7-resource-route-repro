import { data } from "react-router";

export function loader() {
  const items = [
    {
      id: "1",
      title: "Item 1",
      description: "Description",
    },
  ];

  return data(items, { headers: { "Content-Type": "application/json" } });
}
