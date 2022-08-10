import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Singup } from "../components/pages/Singup";
import { Files } from "../components/pages/Files";
import { MemoFiles } from "../components/pages/MemoFiles";
import { MemoId } from "../components/pages/MemoId";
import { Setting } from "../components/pages/Setting";
import { Search } from "../components/pages/Search";
import { SettingName } from "../components/pages/SettingName";
import { SettingPw } from "../components/pages/SettingPw";
import { SettingDeactivate } from "../components/pages/SettingDeactivate";
import { MemoAdd } from "../components/pages/MemoAdd";
import { MemoEdit } from "../components/pages/MemoEdit";
import { Login } from "../components/pages/Login";

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Files />} />
        <Route path="/:fileName" element={<MemoFiles />} />
        <Route path="/memo/:memoId" element={<MemoId />} />
        <Route path="/memo/add" element={<MemoAdd />} />
        <Route path="/memo/:memoId/edit" element={<MemoEdit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/nickname" element={<SettingName />} />
        <Route path="/setting/password" element={<SettingPw />} />
        <Route path="/setting/deactivate" element={<SettingDeactivate />} />
      </Route>
    </Routes>
  );
});
