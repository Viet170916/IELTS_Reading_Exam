import React from 'react';
import './css/App.css';
import Header from "./Header/Header";
import QuesList,{setList, } from "./ExamLayout/quesList";
import Question from "../model/Question";
import mockData from "../mockData/mockData";
import mockEssay from "../mockData/mockEssay";
import Essay from "../model/Essay";

let header = new Header();

const questions: Question[] = JSON.parse(mockData);
const essay: Essay[] = JSON.parse(mockEssay);

function App() {
    setList(questions,essay);
  return (
      <>
        <header.render/>
          <div className="ql">
              <QuesList/>
          </div>
      </>
  );
}
export default App;
