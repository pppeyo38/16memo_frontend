import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export type PutMemo = {
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  fileName: string;
};

export const usePutMemo = () => {
  const [newMemo, setNewMemo] = useState<PutMemo>();
  const navigate = useNavigate();

  const SendPutMemo = async (data: PutMemo, id: number) => {
    const sendData = {
      colorCode: data.colorCode,
      tag_name: data.tagName,
      comment: data.comment,
      url: data.url,
      color_file_name: data.fileName,
    };
    console.log(sendData);
    await client.put(`memos/${id}`, sendData).then(() => {
      navigate(`/memo/${id}`);
    });
  };

  return { newMemo, setNewMemo, SendPutMemo };
};
