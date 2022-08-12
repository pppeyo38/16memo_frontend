import { Dispatch, FC, SetStateAction } from "react";
import { Memo } from "../../../types/memo";
import styled from "styled-components";
import { Font } from "../../../style/Font";
import {
  Stack,
  Input,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { FilesDrawer } from "../../organisms/Memo/FilesDrawer";

type Props = {
  newMemo: Memo;
  setNewMemo: Dispatch<SetStateAction<Memo>>;
};

export const MemoForm: FC<Props> = (props) => {
  const { newMemo, setNewMemo } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChangeValue = (value: string, status: string) => {
    setNewMemo((prev) => ({ ...prev, [status]: value }));
  };

  return (
    <>
      <Stack spacing={3} style={{ maxWidth: "340px", margin: "0 auto" }}>
        <FileSelect onClick={onOpen}>{newMemo.fileName}</FileSelect>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<span>#</span>} />
          <Input
            style={InputStyle}
            placeholder="色名を入力"
            value={newMemo.tagName}
            onChange={(e) => onChangeValue(e.target.value, "tagName")}
          />
        </InputGroup>
        <Textarea
          style={TextAreaStyle}
          placeholder="メモ"
          value={newMemo.comment}
          onChange={(e) => onChangeValue(e.target.value, "comment")}
        />
        <Input
          style={InputURLStyle}
          placeholder="URLを入力"
          value={newMemo.url}
          onChange={(e) => onChangeValue(e.target.value, "url")}
        />
      </Stack>
      <FilesDrawer isOpen={isOpen} onClose={onClose} setNewMemo={setNewMemo} />
    </>
  );
};

const { fontFamily } = Font;

const FileSelect = styled.button`
  width: 340px;
  height: 40px;
  padding-left: 13px;
  text-align: start;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-image: url("../../src/images/grayArrow.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const InputStyle = {
  fontFamily: fontFamily.Noto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const TextAreaStyle = {
  height: "115px",
  fontFamily: fontFamily.Noto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};

const InputURLStyle = {
  fontFamily: fontFamily.Roboto,
  fontSize: "16px",
  border: "none",
  background: "#F2F2F2",
  color: "#161616",
};
