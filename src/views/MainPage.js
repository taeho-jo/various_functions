import React, {useCallback} from 'react'
import styled from 'styled-components'
import {functionList} from '../commons/variousFunctionList'

const MainPage = ({history}) => {

  const showFunctionPage = useCallback((pathname) => {
    const params = {
      pathname: pathname
    }
    history.push(params)
  },[history])

  const getList = useCallback(() => {
    return functionList.map(el => {
      return (
          <FunctionBox onClick={() => showFunctionPage(el.routes)}>{el.text}</FunctionBox>
      )
    })
  },[])

  return (
        <MainContainer>
          {getList()}
        </MainContainer>
  )
}

export default React.memo(MainPage);

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //border: 1px solid red;
`

const FunctionBox = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid #ffffff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  
  
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }
`