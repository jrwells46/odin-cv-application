function EmploymentHistoryItem({ historyItem, removeItemHandler, onChangeHandler, historyLength }) {
  return (
    <>
      <div>
        <label htmlFor={`company_name-${historyItem.key}`}>Company Name</label>
        <input
          type="text"
          id={`company_name-${historyItem.key}`}
          name="companyName"
          value={historyItem.companyName}
          onChange={onChangeHandler}
          required
        />

        <label htmlFor={`position_title-${historyItem.key}`}>Position Title</label>
        <input
          type="text"
          id={`position_title-${historyItem.key}`}
          name="positionTitle"
          value={historyItem.positionTitle}
          onChange={onChangeHandler}
          required
        />

        <label htmlFor={`main_responsibilities-${historyItem.key}`}>Main Responsibilities</label>
        <textarea
          id={`main_responsibilities-${historyItem.key}`}
          name="mainResponsibilities"
          value={historyItem.mainResponsibilities}
          onChange={onChangeHandler}
          required
        />

        <label htmlFor={`date_of_employment_start-${historyItem.key}`}>Date of Employment (start)</label>
        <input
          type="month"
          id={`date_of_employment_start-${historyItem.key}`}
          name="employmentStart"
          value={historyItem.employmentStart}
          onChange={onChangeHandler}
          required 
        />

        <label htmlFor={`date_of_employment_end-${historyItem.key}`}>Date of Employment (end)</label>
        <input
          type="month"
          id={`date_of_employment_end-${historyItem.key}`}
          name="employmentEnd"
          value={historyItem.employmentEnd}
          onChange={onChangeHandler}
          required
        />

      </div>
      {historyLength > 1 && <button type="button" onClick={removeItemHandler}>-</button>}
    </>
  )
}

export default EmploymentHistoryItem;
