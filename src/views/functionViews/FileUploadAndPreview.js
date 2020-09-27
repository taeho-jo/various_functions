import React, {useCallback} from 'react'
import BackButton from "../../commons/BackButton";
import styled from 'styled-components'

const FileUploadAndPreview = ({history}) => {

  const handleBackList = useCallback(() => {
    const params = {
      pathname: '/'
    }
    history.push(params)
  },[history])


  return (
    <>
      <BackButton onClick={handleBackList} />
      <MainContainer>

        오늘은 이미지 미리보기!!

      </MainContainer>
    </>
  )
}

export default React.memo(FileUploadAndPreview)

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 400px) {
    width: 100%;
    max-width: 400px;
    justify-content: start;
    flex-wrap: wrap;
  }
`

const ImgAreaContainer = styled.div`
  display: flex;
  align-items: center;
`

const ImgArea = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`

const Label = styled.label`
  display: inline-block;
  color: #fff;
  padding: 10px;
  background: #6a4162;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
`

const ImgName = styled.span`
  margin-left: 3px;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`