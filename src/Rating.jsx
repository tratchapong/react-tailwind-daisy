import { useState } from 'react';
function Rating() {
  const [point, setPoint] = useState('10');

  const hdlChange = (e) => {
    setPoint(e.target.value);
  };

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="max-w-lg mx-auto bg-gray-200 rounded p-3 ">
      <div className="border m-3 flex justify-evenly">
        <div className="rating rating-lg rating-half ">
          <input type="radio" name="rating-10" className="rating-hidden" />
          {data.map((x) =>
            x % 2 ? (
              <input
                type="radio"
                name="rating-10"
                value={x}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={hdlChange}
              />
            ) : (
              <input
                type="radio"
                name="rating-10"
                value={x}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={hdlChange}
              />
            )
          )}
        </div>
        <button class="btn btn-outline btn-primary ">{point}</button>
      </div>
    </div>
  );
}

export default Rating;
