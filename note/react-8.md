# CSS Import

# 유용한 CSS

### 원소간 간격 넓히기

```jsx
.problem span:not(:first-of-type) {
  margin-left: 12px;
}
```

`:not():first-of-type` 는 가장 첫 원소 다음으로 오는 원소들의 왼쪽에 마진을 주어 각 요소들 사이의 간격을 만든다.

### flex 방향 지정 - flex-direction

```jsx
.form-fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 12px 0;
}
```

### Input태그 내 위아래 화살표 지우기

```jsx
.answer-input::-webkit-outer-spin-button,
.answer-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

****CSS import를 이용해 회원가입 폼 구현하기****

```jsx
import React, { useState } from 'react'
import './register-form.css'

const InputStatus = {
    NORMAL: 'normal',
    ERROR: 'error',
    SUCCESS: 'success'
}

function RegisterForm() {
    // 에러 메시지 상태를 정의하고, 상태 관리를 하는 코드를 작성하세요.....
    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState('')
    
    const [ nameInputStatus, setNameInputStatus ] = useState(InputStatus.NORMAL)
    const [ ageInputStatus, setAgeInputStatus ] = useState(InputStatus.NORMAL)
    
    const handleChangeName = (e) => {
      setName(e.target.value)
    }
    
    const handleChangeAge = (e) => {
      setAge(e.target.value)
    }

    const validateName = (name) => {
        if (name.length < 1 || name.length > 10) {
            //error
            setNameInputStatus(InputStatus.ERROR)
            return;
        }
        setNameInputStatus(InputStatus.SUCCESS)
    }

    const validateAge = (age) => {
        const numberedAge = Number(age)
        
        if (!(age >= 1 && age <= 100)) {
            //error
            setAgeInputStatus(InputStatus.ERROR)
            return;
        }
        
        setAgeInputStatus(InputStatus.SUCCESS)
    }

    const submitForm = () => {
      console.log('Submit form!')
      // validate.
      validateName(name)
      validateAge(age)
    }
    // name과 age에 따라 에러 메시지를 출력하는 코드를 작성하세요.
    // 그리고 name과 age의 값을 비우는 초기화 버튼도 구현해보세요.
    
    const resetForm = () => {
        setName('')
        setAge('')
    }

    const getInputStatusStyle = (status) => {
        if (status === InputStatus.ERROR) {
            return 'input-invalid'
        } else if (status === InputStatus.SUCCESS) {
            return 'input-valid'   
        }
        return ''
    }
    
    const getInputStatusTextStyle = (status) => {
        if (status === InputStatus.ERROR) {
            return "text-error"
        }
        return ''
    }
    

    return (
        <form className="form-container">
            <fieldset className="form-fieldset">
                <label 
                className={'form-label ' + getInputStatusTextStyle(nameInputStatus)}
                className="form-label"
                htmlFor="name">이름</label>
                <input
                    className="form-input"
                    value={name}
                    onChange={handleChangeName}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="이름을 입력해 주세요."
                    className={'form-input ' + getInputStatusStyle(nameInputStatus)}
                />
                <div className="form-error text-error">
                {
                nameInputStatus === InputStatus.ERROR && 
                 "이름은 1글자 이상, 10글자 이하여야 합니다."
                }
                 
                </div>
            </fieldset>
            
            <fieldset  className="form-fieldset">
                <label classname={"form-label " + getInputStatusTextStyle(ageInputStatus)
                } htmlFor="age">나이</label>
                <input
                    className="form-input"
                    value={age}
                    onChange={handleChangeAge}
                    type="number" 
                    name="age" 
                    id="age"
                    placeholder="나이를 입력해 주세요." 
                />
                <div className="form-error text-error">
                                {
                ageInputStatus === InputStatus.ERROR && 
                 "나이는 1부터 100 사이여야 합니다."
                }
                 
                </div>
            </fieldset>
            
            <div className="button-container">
              <button
                className="form-button reset-button"
                onClick={resetForm}
              type="reset">초기화</button>
              <button 
                className="form-button submit-button"
                onClick={submitForm}
              type="button">제출</button>
            </div>
            <pre className="debug">
                <code>{JSON.stringify({
                name, 
                age,
                nameInputStatus,
                ageInputStatus
                }, null, 2)}</code>
            </pre>
        </form>
    )
}

export default RegisterForm
```

```jsx
.reset-button {
    background: #adb5bd;
}

.submit-button {
  background: #37b24d;
}

.debug {
  font-size: 0.75rem;
}

.form-input {
  display: block;
  padding: 4px;
  border: 2px solid #dee2e6;
  border-radius: 3px;
}

.input-invalid {
    border: 2px solid #ff6b6b;
}

.input-valid {
    border: 2px solid #51cf66;
}

.form-label {
    font-size: 12px;
    margin-bottom: 8px;
    color: gray;
}

.text-error {
    color: #ff6b6b;
}

.form-error {
    font-size: 12px;
    margin-top: 4px;
}

.button-container {
    display: flex;
    margin-top: 8px;
    
}

.form-button {
    flex: 1;
    
    border: none;
    padding: 4px;
    color: white;
    font-weight: 700;
    border-radius: 3px;
    cursor: pointer;
}

.reset-button {
    background: #adb5bd;
}

.submit-button {
    background: #37b24d;
}

.form-button:not(:first-of-type) {
    margin-left: 8px;
}

.form-fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 12px 0;
}

.form-container {
    min-width: 300px;
}
```

### ****CSS modules를 이용해 회원가입 폼 구현하기****

```jsx

import React, { useState } from "react";
import styles from "./register-form.module.css";

const InputStatus = {
  NORMAL: "normal",
  ERROR: "error",
  SUCCESS: "success",
};

function RegisterForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState(null);
  const [ageError, setAgeError] = useState(null);

  const [nameInputStatus, setNameInputStatus] = useState(InputStatus.NORMAL);
  const [ageInputStatus, setAgeInputStatus] = useState(InputStatus.NORMAL);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const validateName = (name) => {
    if (name.length < 1 || name.length > 10) {
      setNameError("이름은 1글자 이상, 10글자 이하여야 합니다.");
      setNameInputStatus(InputStatus.ERROR);
      return;
    }

    setNameInputStatus(InputStatus.SUCCESS);
  };

  const validateAge = (age) => {
    const numberedAge = Number(age);
    if (numberedAge < 1 || numberedAge > 100) {
      setAgeError("나이는 1부터 100 사이여야 합니다.");
      setAgeInputStatus(InputStatus.ERROR);
      return;
    }

    setAgeInputStatus(InputStatus.SUCCESS);
  };

  const validateForm = (form) => {
    validateName(form.name);
    validateAge(form.age);
  };

  const handleSubmit = () => {
    const formData = { name, age };
    validateForm(formData);
  };

  const handleReset = () => {
    setName("");
    setAge("");
  };

  const getInputStatusStyle = (status) => {
    if (status === InputStatus.ERROR) {
      return styles.inputInvalid;
    } else if (status === InputStatus.SUCCESS) {
      return styles.inputValid;
    }
    return "";
  };

  // CSS modules를 적용할 수 있도록 className을 수정하세요.
  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.formFieldset}>
        <label
          className={`${styles.formLabel} ${
            nameInputStatus === InputStatus.ERROR ? "text-error" : ""
          } `}
          htmlFor="name"
        >
          이름
        </label>
        <input
          value={name}
          id="name"
          onChange={handleNameChange}
          type="text"
          name="name"
          className={`${styles.formInput} ${getInputStatusStyle(nameInputStatus)}`}
          placeholder="이름을 입력해 주세요."
        />

        <div 
        className={`${styles.textError} ${styles.formError}`}
        >
          {nameInputStatus === InputStatus.ERROR && nameError}
        </div>
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <label
          className={`${styles.formLabel} ${
            ageInputStatus === InputStatus.ERROR ? "text-error" : ""
          } `}
          htmlFor="age"
        >
          나이
        </label>
        <input
          id="age"
          value={age}
          onChange={handleAgeChange}
          type="number"
          name="age"
          className={`${styles.formInput} ${getInputStatusStyle(ageInputStatus)}`}
          placeholder="나이를 입력해 주세요."
        />

        <div className={`${styles.textError} ${styles.formError}`}>
          {ageInputStatus === InputStatus.ERROR && ageError}
        </div>
      </fieldset>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleReset}
          type="button"
          className={`${styles.formButton} ${styles.resetButton}`}
        >
          초기화
        </button>

        <button
          onClick={handleSubmit}
          type="button"
          className={`${styles.formButton} ${styles.submitButton}`}
        >
          제출
        </button>
      </div>

    </form>
  );
}

export default RegisterForm;
```

css

```jsx
/* CSS import로 문제를 해결했던 코드를 CSS modules로 해결하기 위해 코드를 수정하세요. */

.formContainer {
  min-width: 300px;
}

.formFieldset {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.formFieldset:not(:first-of-type) {
  border-bottom: none;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}

.formFieldset {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 12px 0;
}

.formInput {
  display: block;
  padding: 4px;
  border: 2px solid #dee2e6;
  border-radius: 3px;
}

.formLabel {
  display: block;
  padding-bottom: 8px;

  font-size: 0.8rem;
  color: gray;
}

.buttonContainer {
  display: flex;
}

.formButton {
  flex: 1;
  border: none;
  padding: 4px;
  color: white;
  font-weight: 700;

  border-radius: 3px;
  cursor: pointer;
}

.resetButton {
  background: #adb5bd;
}

.submitButton {
  background: #37b24d;
}

.formButton:not(:first-of-type) {
  margin-left: 8px;
}

.inputInvalid {
  border: 2px solid #ff6b6b;
}

.inputValid {
  border: 2px solid #51cf66;
}

.formError {
  font-size: 0.8rem;
  min-height: 20px;
  margin-top: 4px;
}

.textError {
  color: #ff6b6b;
}

.debug {
  font-size: 0.75rem;
}
```