interface TacticsBlockProps {
  color: string;
  tactics: string;
}

/* Мысль такая что нужно принимать тактику брать из нее цифры и на основании создавать массив цифр
    одно из возможных решений ->
    1. Форматировать тактику
    2. Создавать массив чисел
    3. При map Array(50) делать проверку если есть совпадение index + 1 то нужный игрок появляется на поле
 */
const testArray = [5, 10, 35];

export default function TacticsBlock({ color, tactics }: TacticsBlockProps) {
  return (
    <div className="grid grid-cols-10 grid-rows-5">
      {[...Array(50)].map((item, i) => (
        <div className="flex items-center" key={item}>
          <div className="bg-white w-[15px] h-[15px] border border-red-700 rounded-full flex items-center justify-center">
            {i}
          </div>
        </div>
      ))}
    </div>
  );
}
