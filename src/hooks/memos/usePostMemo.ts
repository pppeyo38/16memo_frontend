import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../lib/axios";

export type PostMemo = {
  colorCode: string;
  tagName: string;
  comment: string;
  url: string;
  fileName: string;
};

export const usePostMemos = () => {
  const [newMemo, setNewMemo] = useState<PostMemo>();
  const navigate = useNavigate();

  const SendPostMemo = async (data: PostMemo) => {
    const sendData = {
      colorCode: data.colorCode,
      tag_name: data.tagName,
      comment: data.comment,
      url: data.url,
      color_file_name: data.fileName,
    };
    console.log(sendData);
    await client.post("memos", sendData).then((response) => {
      navigate(`/${response.data.fileName}`, {
        state: { id: response.data.fileId },
      });
    });
  };

  return { newMemo, setNewMemo, SendPostMemo };
};
