import { useState } from 'react';
import Section from './Section.jsx';
import Display from './Display.jsx';
import EmploymentHistoryItem from './EmploymentHistoryItem.jsx';

function EmploymentInfo() {
  const [historyItems, setHistoryItems] = useState([{
    key: crypto.randomUUID(),
    companyName: '',
    positionTitle: '',
    mainResponsibilies: '',
    employmentStart: '',
    employmentEnd: '',
  }]);
  const [isEditMode, setIsEditMode] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  const addItemHandler = () => {
    setHistoryItems([...historyItems.map(historyItem => Object.assign({}, historyItem)), {
      key: crypto.randomUUID(),
      companyName: '',
      positionTitle: '',
      mainResponsibilies: '',
      employmentStart: '',
      employmentEnd: '',
    }]);
  };

  const removeItemHandler = (key) => {
    setHistoryItems([...historyItems.filter((historyItem) => historyItem.key !== key)]);
  };

  const onChangeHandler = (key, e) => {
    const { name, value } = e.target;
    const updatedHistoryItems = [...historyItems];
    const historyItem = updatedHistoryItems.find((historyItem) => historyItem.key === key);
    historyItem[name] = value;

    setHistoryItems(updatedHistoryItems);
  };

  return isEditMode ? (
    <Section onSubmit={onSubmit}>
      <h2>Employment History</h2>
      {historyItems.map((historyItem) => (
        <EmploymentHistoryItem
          key={historyItem.key}
          historyItem={historyItem}
          removeItemHandler={() => removeItemHandler(historyItem.key)}
          onChangeHandler={(e) => onChangeHandler(historyItem.key, e)}
          historyLength={historyItems.length}
        />
      ))}
      <button type="button" onClick={addItemHandler}>+</button>
    </Section>
  ) : (
    <Display onClick={() => setIsEditMode(!isEditMode)}>
      <h2>Employment History</h2>
      {historyItems.map((historyItem) => (
        <div key={historyItem.key}>
          <h3>{historyItem.companyName}</h3>
          <p><i>{historyItem.positionTitle} • {historyItem.employmentStart} - {historyItem.employmentEnd}</i></p>
          <p>{historyItem.mainResponsibilities}</p>
        </div>
      ))}
    </Display>
  )
}

export default EmploymentInfo;