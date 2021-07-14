import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import './Question.css';
var PrintTemplate = require('react-print');

const initialList = [
    {
        id:1,
        universityName:'',
        universitAddress:'',
        city:'',
        state:'',
        country:'',
        examType:'',
        year:'',
        subjectName:'',
        subjectCode:'',
        course:'',
        time:'',
        instructions:'',
        paperSet:'',
        subjecname:'',
        subjectcode:'',
        subjectcoure:'',
        subjectime:'',
        subjectpaperset:'',

       },
];


const questionList = [
    {
        questionNumber:'',
        question:'',
    }
];




const QuestionPaper = () => {
    const [list, setList] = useState(initialList);
    const [universityName, setUniversityName] = useState('');
    const [universityAddress, setUniversityAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [examType, setExamType] = useState('');
    const [year, setYear] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [subjectCode, setSubjectCode] = useState('');
    const [course, setCourse] = useState('');
    const [time, setTime] = useState('');
    const [instruction, setInstruction] = useState('');
    const [paperSet, setPaperSet] = useState('');
    const [subjectcode, setSubjectcode] = useState('');
    const [subjectname, setSubjectname] = useState('');
    const [subjectcourse, setSubjectcourse] = useState('');
    const [subjecttime, setSubjecttime] = useState('');
    const [subjectpaperset,setSubjectpaperset] = useState('');


    const [qlist, setQlist] = useState(questionList);
    const [questionNumber, setQuestionNumber] = useState('');
    const [question, setQuestion] = useState('');

    
    function handleQuestionNumber(event)
    {
     parseFloat(setQuestionNumber(event.target.value));
    }


    function handleQuestion(event)
    {
        setQuestion(event.target.value);
    }

    function handleQuestionAdd()
    {
         const newQuestion = qlist.concat({questionNumber,question,id: uuidv4()});
         setQlist(newQuestion);
         setQuestionNumber('');
         setQuestion('');
    }


    function handleUniversityName(event)
    {
        setUniversityName(event.target.value);
    }

    function handleUniversityAddress(event)
    {
        setUniversityAddress(event.target.value);
    }

    function handleCity(event)
    {
        setCity(event.target.value);
    }

    function handleState(event)
    {
        setState(event.target.value);
    }

    function handleCountry(event)
    {
        setCountry(event.target.value);
    }

    function handleExamType(event)
    {
        setExamType(event.target.value);
    }
    

    function handleYear(event)
    {
        setYear(event.target.value);
    }

    function handleSubjectName(event)
    {
        setSubjectName(event.target.value);
    }

    function handleSubjectCode(event)
    {
        setSubjectCode(event.target.value);
    }

    function handleCourse(event)
    {
        setCourse(event.target.value);
    }


    function handleTime(event)
    {
        setTime(event.target.value);
    }


    function handleInstruction(event)
    {
        setInstruction(event.target.value);
    }

    function handlePaperSet(event)
    {
        setPaperSet(event.target.value);
    }



   
      
  
    function handleAdd(){
        const newList = list.concat({ universityName,universityAddress,city,state,country,examType,year,subjectName,subjectCode,course,time,instruction,paperSet,subjectcode,subjectpaperset, id:uuidv4() });

        setList(newList);
        setUniversityName('');
        setUniversityAddress('');
        setCity('');
        setState('');
        setCountry('');
        setExamType('');
        setYear('');
        setSubjectName('');
        setSubjectCode('');
        setCourse('');
        setTime('');
        setInstruction('');
        setPaperSet('');
        setSubjectcode('Subject Code: ');
        setSubjectname('Subject Name: ');
        setSubjectcourse('Course: ');
        setSubjecttime('Time: ');
        setSubjectpaperset('Set-:')  
      }

      function handleRemove(id)
        {
        const filterList = list.filter((item) =>item.id !== id);
        setList(filterList);
        }
      

  
    return(
        <div>
            <div className="text-center m-5">
               <div className="input-boxes">

                    <div class="form-group">

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">University Name</span>
                    <input type="text" value={universityName} onChange={handleUniversityName} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">University Address</span>
                    <textarea type="text" value={universityAddress} onChange={handleUniversityAddress} class="form-control" placeholder="" aria-describedby="helpId"></textarea>
                    </div>

                 
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">ExamType</span>
                    <input type="text" value={examType} onChange={handleExamType} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Year</span>
                    <input type="text" value={year} onChange={handleYear} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">SubjectName</span>
                    <input type="text" value={subjectName} onChange={handleSubjectName} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">SubjectCode</span>
                    <input type="text" value={subjectCode} onChange={handleSubjectCode} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Course</span>
                    <input type="text" value={course} onChange={handleCourse} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Time</span>
                    <input type="text" value={time} onChange={handleTime} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Instruction</span>
                    <textarea type="text" value={instruction} onChange={handleInstruction} class="form-control" placeholder="" aria-describedby="helpId"></textarea>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">PaperSet</span>
                    <input type="text" value={paperSet} onChange={handlePaperSet} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <button type="button" className="btn btn-outline-primary mt-3 mb-3" onClick={handleAdd}>
                    Add
                    </button>


                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">QuestionNumber</span>
                    <input type="text" value={questionNumber} onChange={handleQuestionNumber} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Question</span>
                    <input type="text" value={question} onChange={handleQuestion} class="form-control" placeholder="" aria-describedby="helpId"></input>
                    </div>

                    <button type="button" className="btn btn-outline-primary mt-3 mb-3" onClick={handleQuestionAdd}>
                    Add Question
                    </button>

                  
                    
                    
                   
                </div>
            </div>
        </div>

    
        {list.map((item) => (
          
            <div id="card" className="card mt-5">
                <h1 className="university-name" key={item.id}>{item.universityName}</h1>
                <pre className="university-address" key={item.id}>{item.universityAddress}</pre>
                <h4 className="exam-type" key={item.id}>{item.examType}</h4>
                <h5 className="Year" key={item.id}>{item.year}</h5>

                <div className="subject-group">
                <div><h4 className="subject-name" key={item.id}>{subjectname} {item.subjectName}</h4></div>
                <div><h4 className="subject-code" key={item.id}>{subjectcode} {item.subjectCode}</h4></div>
    
                <div><h4 className="subject-course" key={item.id}>{subjectcourse} {item.course}</h4></div>
                <div><h4 className="subject-time" key={item.id}>{subjecttime} {item.time}</h4></div>
                </div>

                <pre className="instructions" key={item.id}>{item.instruction}</pre>
                <h1 className="paper-set" key={item.id}>{subjectpaperset} {item.paperSet}</h1>
                <h5 className="question" key={item.id}>
                {qlist.map((qitem) => (
                     <h5 className="" key={qitem.id}>{qitem.questionNumber} {qitem.question}</h5>
                     
                ))}
                </h5>
                <button className="btn btn-danger btn-lg" onClick={() => handleRemove(item.id)}>
                Delete
                </button>
               
            </div>
          ))}
      
     
    </div>
    );

}


export default QuestionPaper;