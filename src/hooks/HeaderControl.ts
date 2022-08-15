export const HeaderControl = (path: string) => {
  let visible: boolean;
  switch (path) {
    case "/memo/add":
      visible = false;
      break;
    case "/memo/edit":
      visible = false;
      break;
    case "/setting/nickname":
      visible = false;
      break;
    case "/setting/username":
      visible = false;
      break;
    case "/setting/mail":
      visible = false;
      break;
    case "/setting/password":
      visible = false;
      break;
    case "/setting/deactivate":
      visible = false;
      break;
    default:
      visible = true;
      break;
  }
  return visible;
};
