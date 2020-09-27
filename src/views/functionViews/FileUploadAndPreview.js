import React, {useCallback, useState} from 'react'
import BackButton from "../../commons/BackButton";
import styled from 'styled-components'

const FileUploadAndPreview = ({history}) => {

  const [ img, setImg ] = useState([])
  const [ previewImg, setPreviewImg ] = useState([])

  const handleBackList = useCallback(() => {
    const params = {
      pathname: '/'
    }
    history.push(params)
  },[history])

  const insertImg = (e) => {
    let reader = new FileReader()

    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])

      setImg([...img, e.target.files[0]])
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result

      if(previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl])
      }
    }
  }


  const deleteImg = (index) => {
    const imgArr = img.filter((el, idx) => idx !== index)
    const imgNameArr = previewImg.filter((el, idx) => idx !== index)

    setImg([...imgArr])
    setPreviewImg([...imgNameArr])
  }

  const getPreviewImg = () => {
    if(img === null || img.length === 0) {
      return (
        <ImgAreaContainer>
          <ImgArea>
            <Img src='https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif' alt='이미지없음' />
          </ImgArea>
          <ImgName>등록된 이미지가 없습니다.</ImgName>
        </ImgAreaContainer>
      )
    } else {
      return img.map((el, index) => {
        const { name } = el

        return (
          <ImgAreaContainer key={index}>
            <ImgArea>
              <Img src={previewImg[index]}/>
            </ImgArea>
            <ImgName>{name}</ImgName>
            <DeleteButton onClick={() => deleteImg(index)}>❌</DeleteButton>
          </ImgAreaContainer>
        )
      })
    }
  }


  return (
    <>
      <BackButton onClick={handleBackList} />
      <MainContainer>

        {getPreviewImg()}

        <form encType='multipart/form-data'>
          <Label htmlFor='file'>이미지 업로드</Label>
          <FileInput type='file' id='file' onChange={(e) => insertImg(e)}/>
        </form>

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