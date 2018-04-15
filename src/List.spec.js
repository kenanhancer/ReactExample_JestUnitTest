import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import List from "./List";

const setup = () => {
  const props = {
    header: "HEADER",
    items: [],
    className: ""
  };

  const renderer = new ShallowRenderer();

  renderer.render(<List {...props} />);

  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
};

describe("components", () => {
  describe("List", () => {
    it("should render correctly", () => {
      const { output } = setup();

      expect(output.type).toBe("div");
      expect(output.props.className.trim()).toBe("card");

      const [h4, ul] = output.props.children;
      expect(h4.type).toBe("h4");
      expect(h4.props.className).toBe("card-header");
      expect(h4.props.children).toBe("HEADER");

      expect(ul.type).toBe("ul");
      expect(ul.props.className).toBe("list-group list-group-flush");
      expect(ul.props.children.length).toBe(0);
    });

    it("should render items", () => {
      const props = {
        header: "HEADER",
        items: ["Name1", "Name2", "Name3"],
        className: ""
      };

      const renderer = new ShallowRenderer();

      renderer.render(<List {...props} />);

      const output = renderer.getRenderOutput();
    });

    it("should render with styled header", () => {
      const props = {
        header: "HEADER",
        items: ["Name1", "Name2", "Name3"],
        className: "bg-primary"
      };

      const renderer = new ShallowRenderer();

      renderer.render(<List {...props} />);

      const output = renderer.getRenderOutput();

      expect(output.props.className).toBe("card bg-primary");
    });
  });
});
