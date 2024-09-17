import { it, describe } from "vitest";
import { cluster, loadDataset } from "./clustering";

describe("clustering", () => {
  it("should load data", async ({ expect }) => {
    const dataset = loadDataset();

    expect(dataset).toMatchSnapshot();
  });

  it("should create a cluster", async ({ expect }) => {
    const dataset = [
      { lat: 0, lng: 0 },
      { lat: 0, lng: 1 },
      { lat: 10, lng: 10 },
      { lat: 11, lng: 11 },
    ];
    const clusters = cluster(dataset, 5, 1);

    expect(clusters).toMatchObject({
      clusters: [
        {
          data: [
            {
              lat: 0,
              lng: 0,
            },
            {
              lat: 0,
              lng: 1,
            },
          ],
        },
        {
          data: [
            {
              lat: 10,
              lng: 10,
            },
            {
              lat: 11,
              lng: 11,
            },
          ],
        },
      ],
      latMax: 11,
      latMin: 0,
      lngMax: 11,
      lngMin: 0,
    });
  });
});
