import { useState } from 'react';
import Section from './Section.jsx';
import Display from './Display.jsx';

function EducationInfo() {
  const [schoolName, setSchoolName] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [dateOfStudyStart, setDateOfStudyStart] = useState('');
  const [dateOfStudyEnd, setDateOfStudyEnd] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  };

  return isEditMode ? (
    <Section onSubmit={onSubmit}>
      <h2>Education</h2>
      <div>
        <label htmlFor="school_name">School Name</label>
        <input
          type="text"
          id="school_name"
          name="schoolName"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />

        <label htmlFor="field_of_study">Field of Study</label>
        <input
          type="text"
          id="field_of_study"
          name="fieldOfStudy"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          required
        />

        <label htmlFor="date_of_study_start">Date of study (start)</label>
        <input
          type="month"
          id="date_of_study_start"
          name="dateOfStudyStart"
          max={`${year}-${month}`}
          value={dateOfStudyStart}
          onChange={(e) => setDateOfStudyStart(e.target.value)}
          required
        />

        <label htmlFor="date_of_study_end">Date of study (end)</label>
        <input
          type="month"
          id="date_of_study_end"
          name="dateOfStudyEnd"
          value={dateOfStudyEnd}
          onChange={(e) => setDateOfStudyEnd(e.target.value)}
          required
        />
      </div>
    </Section>
  ) : (
    <Display onClick={() => setIsEditMode(!isEditMode)}>
      <h2>Education</h2>
      <h3>{schoolName}</h3>
      <p>{fieldOfStudy} • <i>{dateOfStudyStart.slice(5)}/{dateOfStudyStart.slice(0,4)} - {dateOfStudyEnd.slice(5)}/{dateOfStudyEnd.slice(0,4)}</i></p>
    </Display>
  )
}

export default EducationInfo;
