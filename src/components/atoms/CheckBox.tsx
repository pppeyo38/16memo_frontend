import { Checkbox } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import checkIcon from "../../images/check.svg";

type Props = {
  checkedItems: string[];
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
  id: string;
};

export const CheckBox: FC<Props> = (props) => {
  const { checkedItems, setCheckedItems, id } = props;

  const onClickCheck = (value: string) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== value)
      );
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  return (
    <Checkbox
      value={id}
      onChange={(e) => onClickCheck(e.target.value)}
      sx={{
        ...checkBoxStyle,
        background: checkedItems.includes(id) && "#FD4A4A",
        backgroundImage: checkedItems.includes(id) && checkIcon,
        backgroundRepeat: checkedItems.includes(id) && "no-repeat",
        backgroundPosition: checkedItems.includes(id) && "center",
        border: checkedItems.includes(id)
          ? "solid 2px #FD4A4A"
          : "solid 2px #9b9b9b",
      }}
    />
  );
};

const checkBoxStyle = {
  width: "25px",
  height: "25px",
  border: "solid 2px #9b9b9b",
  borderRadius: "50%",
  span: {
    display: "none",
  },
};
