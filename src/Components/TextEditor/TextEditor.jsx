//import 'codemirror/lib/codemirror.css';
//import './Components/TextEditor/TextEditor.css';
//import { toastui } from '@toast-ui/editor/dist/toastui-editor-viewer';

import {useState, useEffect} from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'C:/Users/user/front-end/src/Components/TextEditor/TextEditor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import ReactHTMLParser from 'html-react-parser';
import Axios from 'axios';

function TextEditor() {

    // useState 입력한 내용 얻기 : useState를 이용해 입력한 내용을 state에 저장하는 과정
    const [clubContent, setclubContent] = useState({
        title: '',
        content: '',
    })

    // state에 저장된 내용을 화면에 보여주는 기능
    const [viewContent, setViewContent] = useState([]);

    // useEffect(()=>{
    //     Axios.get('http://localhost:3000/api/get').then((response)=>{
    //       setViewContent(response.data);
    //     })
    // },[viewContent])

    const submitReview=()=> {
        // Axios.post('http://localhost:3000/api/insert', {
        //     title: clubContent.title,
        //     content: clubContent.content
        // })
        setViewContent(viewContent.concat({...clubContent}))
        .then(()=> {
            alert('등록 완료');
        })
    };

    // 인풋의 내용이 변할 때 그 값을 state에 업데이트해주는 기능
    const getValue = e => {
        const {name, value} = e.target;
        setclubContent({
            ...clubContent,
            [name]: value
        })
        console.log(clubContent);
    };

    // // 카테고리
    // function categoryChange(e) {
    //     var major_1 = [];
    //     var major_2 = [];
    //     var major_3 = [];
    //     var major_4 = [];
    //     var major_5 = [];
    //     var major_6 = [];
    //     var major_7 = [];
    //     var major_8 = [];
    //     var target = document.getElementById("major");

    //     if(e.value == "1") var a = major_1;
    //     else if (e.value == "2") var a = major_2;
    //     else if (e.value == "3") var a = major_3;
    //     else if (e.value == "4") var a = major_4;
    //     else if (e.value == "5") var a = major_5;
    //     else if (e.value == "6") var a = major_6;
    //     else if (e.value == "7") var a = major_7;
    //     else if (e.value == "8") var a = major_8;

    //     target.options.length = 0;

    //     for (x in a) {
    //         var opt = document.createElement("option");
    //         opt.value = a[x];
    //         opt.innerHTML = a[x];
    //         target.appendChild(opt);
    //     }    
    // }


    return (
        <>
            <h1 class="title">글쓰기</h1>
            <div class="category">
            <select onChange="college">
                <option>단과대학</option>
                <option value="1">의과대학</option>
                <option value="2">자연과학대학</option>
                <option value="3">인문사회대학</option>
                <option value="4">글로벌경영대학</option>
                <option value="5">공과대학</option>
                <option value="6">SW융합대학</option>
                <option value="7">의료과학대학</option>
                <option value="8">SCH미디어랩스</option>
            </select>
            <select class="major">
               <option>학과</option>
               
            </select> 
            </div>
            <div class="form-wrapper">
                <div class="title-wrapper">
                    <input class="title-input" type='text' placeholder='제목' 
                        onChange={getValue} name='title'    
                    />
                </div>
                <div class="TextEditor">
                    <Editor
                        previewStyle='vertical'
                        height='500px'
                        initialEditType='markdown'
                        plugins={[colorSyntax]}
                        // onChange={(event, editor) => {
                        //     const data = editor.getData();
                        //     console.log({event, editor, data});
                        //     setclubContent({
                        //         ...clubContent,
                        //         content: data
                        //     })
                        //     console.log(clubContent);
                        // }}
                    />
                    <div class="button-wrap">
                        <button class="submit-button" onClick={submitReview}>등록</button>
                        {/* <button class="cancel-button" onClick={[]}>취소</button> */}
                        <button class="cancel-button" onClick="location.href='main.jsx'">취소</button>
                    </div>
                </div>
            </div>
        </>
    );   
}

export default TextEditor;