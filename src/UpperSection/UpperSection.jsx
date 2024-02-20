import { useState } from "react"
import clsx from "clsx"
import "./UpperSection.scss"

export const UpperSection = ({ isActive = true }) => {
  const [error, setError] = useState(true)
  return (
    <section className="UpperSection">
      <form className={clsx("Form", { Form_error: error })}>
        <label>
          DAY
          <input type="number" min={0} max={31} placeholder="DD" />
          <span className={error ? "Error_show" : "Error_hide"}>
            Must be a valid day
          </span>
        </label>
        <label>
          MONTH
          <input
            className={clsx("tut", { Burger_active: isActive })}
            type="number"
            min={1}
            max={12}
            placeholder="MM"
          />
          <span className={error ? "Error_show" : "Error_hide"}>
            Must be a valid month
          </span>
        </label>
        <label>
          YEAR
          <input type="number" min={0} max={2025} placeholder="YYYY" />
          <span className={error ? "Error_show" : "Error_hide"}>
            Must be a valid year
          </span>
        </label>
      </form>
    </section>
  )
}
