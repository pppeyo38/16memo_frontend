import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { Memo } from "../../../types/memo";
import styled from "styled-components";
import {
  Stack,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { FilesDrawer } from "../../organisms/Memo/FilesDrawer";
import grayArrow from "../../../images/grayArrow.svg";

type Props = {
  newMemo: Memo;
  setNewMemo: Dispatch<SetStateAction<Memo>>;
  fileError: boolean;
  setFileError: Dispatch<SetStateAction<boolean>>;
  tagError: boolean;
  setTagError: Dispatch<SetStateAction<boolean>>;
};

export const MemoForm: FC<Props> = (props) => {
  const {
    newMemo,
    setNewMemo,
    fileError,
    setFileError,
    tagError,
    setTagError,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const renderFlgRef = useRef(false);

  const onChangeValue = (value: string, status: string) => {
    setNewMemo((prev) => ({ ...prev, [status]: value }));
  };

  const onCheckTag = (value: string) => {
    value.length === 0 ? setTagError(true) : setTagError(false);
  };

  useEffect(() => {
    if (renderFlgRef.current) {
      setFileError(newMemo.fileName.length === 0);
    } else {
      renderFlgRef.current = true;
    }
  }, [newMemo.fileName]);

  return (
    <>
      <Stack spacing={3} style={{ maxWidth: "340px", margin: "0 auto" }}>
        <FileSelect
          isDefault={newMemo.fileName.length === 0}
          isInvalid={fileError}
          onClick={onOpen}
        >
          {newMemo.fileName.length === 0
            ? "ファイルを選択"
            : `${newMemo.fileName}`}
        </FileSelect>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<span>#</span>} />
          <Input
            style={InputStyle}
            placeholder="色名を入力"
            _placeholder={{ color: "#9B9B9B" }}
            value={newMemo.tagName}
            onChange={(e) => onChangeValue(e.target.value, "tagName")}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              onCheckTag(e.target.value)
            }
            isInvalid={tagError}
          />
        </InputGroup>
        <Textarea
          style={TextAreaStyle}
          placeholder="メモ"
          _placeholder={{ color: "#9B9B9B" }}
          value={newMemo.comment}
          onChange={(e) => onChangeValue(e.target.value, "comment")}
        />
        <Input
          style={InputURLStyle}
          placeholder="URLを入力"
          _placeholder={{ color: "#9B9B9B" }}
          value={newMemo.url}
          onChange={(e) => onChangeValue(e.target.value, "url")}
        />
      </Stack>
      <FilesDrawer isOpen={isOpen} onClose={onClose} setNewMemo={setNewMemo} />
    </>
  );
};

const FileSelect = styled.button<{ isDefault: boolean; isInvalid: boolean }>`
  width: 340px;
  height: 40px;
  padding-left: 13px;
  color: ${(props) => (props.isDefault ? "#9B9B9B" : "#161616")};
  text-align: start;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: ${(props) => (props.isInvalid ? "solid 1px #FD4A4A" : "none")};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-image: url(${grayArrow});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const InputStyle = {
  fontFamily: "Noto Sans JP, sans-serif",
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const TextAreaStyle = {
  height: "115px",
  fontFamily: "Noto Sans JP, sans-serif",
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const InputURLStyle = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};
