import React from 'react'

function Daisy() {
  return (
    <div>
    <button className="btn btn-primary m-3 block">Hello daisyUI</button>
    <div class="rating">
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" checked />
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" />
      <input type="radio" name="rating-1" class="mask mask-star" />
    </div>
  </div>
  )
}

export default Daisy 