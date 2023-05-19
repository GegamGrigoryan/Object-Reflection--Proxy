import { obj, orderByProps } from '../src/index.js'
import { character, getSpecialValue} from '../src/destructuring.js'



describe("Функция сортировки", () => {
    test('Сортировка массива ["name", "level"]', () => {
        let testEqual =
            [{ key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
            ];
        expect(orderByProps(obj, ["name", "level"])).toEqual(testEqual);
    });
    test('Сортировка массива /["health", "attack"]', () => {
        let testEqualTwo =
            [{ key: "health", value: 10 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "level", value: 2 },
            { key: "name", value: "мечник" },
            ];
        expect(orderByProps(obj, ["health", "attack"])).toEqual(testEqualTwo);
    });
})


describe("character", () => {
    test('getSpecialValue()', () => {
        const testEqual = [
            {
              id: 8,
              name: 'Двойной выстрел',
              icon: 'http://...',
              description: 'Двойной выстрел наносит двойной урон'
            },
            {
              id: 9,
              name: 'Нокаутирующий удар',
              icon: 'http://...',
              description: 'Описание недоступно'
            }
          ];
        expect(getSpecialValue(character)).toEqual(testEqual);
    });
})



