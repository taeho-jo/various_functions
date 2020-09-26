import React, {useCallback, useState} from 'react'
import styled from 'styled-components'

const RadioButton = ({history}) => {
  const [ inputStatus, setInputStatus ] = useState('')

  const handleClickRadioButton = useCallback((string) => {
    setInputStatus(string)
  },[inputStatus])

  const handleBackList = useCallback(() => {
    const params = {
      pathname: '/'
    }
    history.push(params)
  },[history])

  return (
    <>
      <Header>
        <BackBtn onClick={handleBackList}>뒤로가기</BackBtn>
      </Header>

      <RadioBtnContainer>

        <RadioBtnBox>
          <RadioBtn id='radio' checked={inputStatus === ''} type='radio' onClick={() => handleClickRadioButton('')}/>
          <label htmlFor="radio">radio</label>
        </RadioBtnBox>

        <RadioBtnBox>
          <RadioBtn id='radio1' checked={inputStatus === 'radio1'} type='radio' onClick={() => handleClickRadioButton('radio1')}/>
          <label htmlFor="radio1">radio1</label>
        </RadioBtnBox>

        <RadioBtnBox>
          <RadioBtn id='radio2' checked={inputStatus === 'radio2'} type='radio' onClick={() => handleClickRadioButton('radio2')}/>
          <label htmlFor="radio2">radio2</label>
        </RadioBtnBox>

        <RadioBtnBox>
          <RadioBtn id='radio3' checked={inputStatus === 'radio3'} type='radio' onClick={() => handleClickRadioButton('radio3')}/>
          <label htmlFor="radio3">radio3</label>
        </RadioBtnBox>
      </RadioBtnContainer>

      <StateValue> state value : {inputStatus}</StateValue>


     </>
  )
}

export default React.memo(RadioButton)

const Header = styled.header`
  //border: 1px solid yellow;
  //width: 100%;
  
`
const BackBtn = styled.button`
  font-size: 20px;
  padding: 10px 10px 10px 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`

const RadioBtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  //border: 1px solid yellow;
  
  @media (max-width: 400px) {
    width: 100%;
    max-width: 400px;
    justify-content: start;
    flex-wrap: wrap;
  }
`

const RadioBtnBox = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
`

const RadioBtn = styled.input`

`

const StateValue = styled.h1`
  text-align: center;
  font-size: 50px;
  
  @media (max-width: 400px) {
    text-align: left;
    font-size: 28px;
  }
`