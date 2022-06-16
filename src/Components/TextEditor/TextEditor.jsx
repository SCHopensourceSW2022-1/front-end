import { useState, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '../../Styles/TextEditor.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import axios from 'axios';

function TextEditor() {
  // useState 입력한 내용 얻기 : useState를 이용해 입력한 내용을 state에 저장하는 과정
  const [clubContent, setclubContent] = useState({
    title: '',
    content: '',
  });

  // state에 저장된 내용을 화면에 보여주는 기능
  const [viewContent, setViewContent] = useState([]);

  // useEffect(()=>{
  //     Axios.get('http://localhost:3000/api/get').then((response)=>{
  //       setViewContent(response.data);
  //     })
  // },[viewContent])

  const submitReview = () => {
    // Axios.post('http://localhost:3000/api/insert', {
    //     title: clubContent.title,
    //     content: clubContent.content
    // })
    setViewContent(viewContent.concat({ ...clubContent })).then(() => {
      alert('등록 완료');
    });
  };

  // 인풋의 내용이 변할 때 그 값을 state에 업데이트해주는 기능
  const getValue = (e) => {
    const { name, value } = e.target;
    setclubContent({
      ...clubContent,
      [name]: value,
    });
    console.log(clubContent);
  };

  // 선택된 파일 읽기
  const [files, setFiles] = useState('');

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  // 파일 전송하기
  const handleClick = (e) => {
    const formdata = new FormData();
    formdata.append('uploadImage', files[0]);

    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(`api`, formdata, config);
  };

  // 파일 미리보기
  useEffect(() => {
    preview();

    return () => preview();
  });

  const preview = () => {
    if (!files) return false;

    const imgEL = document.querySelector('.img__box');

    const reader = new FileReader();

    reader.onload = () =>
      (imgEL.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <h1 class="title">글쓰기</h1>
      <div class="category">
        <select>
          <option>동아리 선택</option>
          <option value="1">중앙동아리</option>
          <option value="2">학술동아리</option>
        </select>
      </div>
      <div class="form-wrapper">
        <div class="title-wrapper">
          <input
            class="title-input"
            type="text"
            placeholder="제목"
            onChange={getValue}
            name="title"
          />
        </div>
        <div class="TextEditor">
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="WYSIWYG"
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

          <div class="file-upload"> 대표이미지 불러오기</div>
          <div class="img__box"></div>
          <input
            type="file"
            name="image_uploads"
            id="image_uploads"
            accept="image/*"
            onChange={onLoadFile}
          />

          <div class="button-wrap">
            <button class="submit-button" onClick={handleClick}>
              등록
            </button>
            <button class="cancel-button" onClick="location.href='main.jsx'">
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextEditor;
