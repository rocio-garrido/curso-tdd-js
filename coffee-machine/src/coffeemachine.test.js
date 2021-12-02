import { CoffeeMachine } from "./coffeemachine";

test("drink maker makes coffee", () => {
    const drinkMaker = jest.fn();
    const coffeeMachine = new CoffeeMachine(drinkMaker);
    coffeeMachine.orderCoffee();

    expect(drinkMaker).toHaveBeenCalledWith("C::")
});