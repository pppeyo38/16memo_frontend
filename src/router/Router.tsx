import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { Singup } from "../components/pages/Singup";
import { ResetPw } from "../components/pages/ResetPw";
import { Files } from "../components/pages/Files";
import { FileAdd } from "../components/pages/FileAdd";
import { MemoFiles } from "../components/pages/MemoFiles";
import { MemoId } from "../components/pages/MemoId";
import { Setting } from "../components/pages/account/Setting";
import { Search } from "../components/pages/Search";
import { SettingName } from "../components/pages/account/SettingName";
import { SettingMail } from "../components/pages/account/SettingMail";
import { SettingId } from "../components/pages/account/SettingId";
import { SettingPw } from "../components/pages/account/SettingPw";
import { SettingDeactivate } from "../components/pages/account/SettingDeactivate";
import { MemoAdd } from "../components/pages/MemoAdd";
import { MemoEdit } from "../components/pages/MemoEdit";
import { Login } from "../components/pages/Login";
import { FileEdit } from "../components/pages/FileEdit";

export const Router = memo(() => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password_reset" element={<ResetPw />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Files />} />
        <Route path="/:fileName" element={<MemoFiles />} />
        <Route path="/file/add" element={<FileAdd />} />
        <Route path="/:fileName/edit" element={<FileEdit />} />
        <Route path="/memo/:memoId" element={<MemoId />} />
        <Route path="/memo/add" element={<MemoAdd />} />
        <Route path="/memo/:memoId/edit" element={<MemoEdit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/nickname" element={<SettingName />} />
        <Route path="/setting/username" element={<SettingId />} />
        <Route path="/setting/mail" element={<SettingMail />} />
        <Route path="/setting/password" element={<SettingPw />} />
        <Route path="/setting/deactivate" element={<SettingDeactivate />} />
      </Route>
    </Routes>
  );
});
