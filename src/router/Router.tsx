import { memo } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { ComponentCatalog } from "../components/pages/ComponentCatalog";
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
// import { Search } from "../components/pages/Search";

export const Router = memo(() => {
  return (
    <Routes>
      <Route
        path="/catalog"
        element={
          <HeaderLayout>
            <ComponentCatalog />
          </HeaderLayout>
        }
      />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/authFiles"
        element={
          localStorage.getItem("token") ? (
            <HeaderLayout>
              <Files />
            </HeaderLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/"
        element={
          <HeaderLayout>
            <Files />
          </HeaderLayout>
        }
      />
      <Route
        path="/:fileName"
        element={
          <HeaderLayout>
            <MemoFiles />
          </HeaderLayout>
        }
      />
      <Route
        path="/memo/:memoId"
        element={
          <HeaderLayout>
            <MemoId />
          </HeaderLayout>
        }
      />
      {/* TODO: クエリパラメータ */}
      <Route
        path="/search"
        element={
          <HeaderLayout>
            <Search />
          </HeaderLayout>
        }
      />
      {/* <Route
				path="/search2"
				element={<HeaderLayout><SearchResult /></HeaderLayout>}
			/> */}
      <Route
        path="/setting"
        element={
          <HeaderLayout>
            <Setting />
          </HeaderLayout>
        }
      />
      <Route
        path="/setting/nickname"
        element={
          <HeaderLayout>
            <SettingName />
          </HeaderLayout>
        }
      />
      <Route
        path="/setting/password"
        element={
          <HeaderLayout>
            <SettingPw />
          </HeaderLayout>
        }
      />
      <Route
        path="/setting/deactivate"
        element={
          <HeaderLayout>
            <SettingDeactivate />
          </HeaderLayout>
        }
      />
      <Route
        path="/memo/add"
        element={
          <HeaderLayout>
            <MemoAdd />
          </HeaderLayout>
        }
      />
      <Route
        path="/memo/:memoId/edit"
        element={
          <HeaderLayout>
            <MemoEdit />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
