const SVGManager = {
  setFillColor: function (object: HTMLObjectElement, color: string): void {
    if (!object) {
      console.error(`SVG object with ID "${object}" not found.`);
      return;
    }

    const svgDoc = object.contentDocument;
    if (!svgDoc) {
      console.error(`Unable to access SVG content for "${object}".`);
      return;
    }

    const paths = svgDoc.querySelectorAll("path");
    paths.forEach((path) => path.setAttribute("fill", color));
  },

  setStrokeColor: function (object: HTMLObjectElement, color: string): void {
    if (!object) {
      console.error(`SVG object with ID "${object}" not found.`);
      return;
    }

    const svgDoc = object.contentDocument;
    if (!svgDoc) {
      console.error(`Unable to access SVG content for "${object}".`);
      return;
    }

    const paths = svgDoc.querySelectorAll("path");
    paths.forEach((path) => path.setAttribute("stroke", color));
  },
};

export default SVGManager;
