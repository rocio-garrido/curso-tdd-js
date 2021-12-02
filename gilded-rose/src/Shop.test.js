import Shop from "./Shop";
import Item from "./Item";

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

function regularItem({sellIn, quality}) {
  return new Item("foo", sellIn, quality);
}

function agedBrieItem({sellIn, quality}) {
  return new Item("Aged Brie", sellIn, quality);
}

test("quality decreases every day", () => {
  const item = regularItem({ sellIn: 1, quality: 3 });
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(2);
});

test("sellIn value decreases every day", () => {
  const item = regularItem({ sellIn: 1, quality: 3 });
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.sellIn).toEqual(0);
});

test("once the sell by date has passed, quality degrades twice as fast", () => {
  const item = regularItem({ sellIn: 0, quality: 3 });
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(1);
});

test("quality of an item is never negative", () => {
  const item = regularItem({ sellIn: 5, quality: 0 });
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(MIN_QUALITY);
});

test("aged brie increases in quality", () => {
  const item = agedBrieItem({ sellIn: 5, quality: 0 });
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(1);
});
