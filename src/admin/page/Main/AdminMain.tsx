import React, { useState } from "react";
import styles from "./AdminMain.module.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "../../components/Pagination";
const AdminMain: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const data = Array.from({ length: 10 }, (_, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>111.xxx.xxx.xx</td>
      <td>2025-01-01 00:00</td>
      <td>모바일</td>
      <td>서울</td>
      <td>기타 상담</td>
      <td>문의 내용</td>
      <td>010-1111-2222</td>
      <td>홍길동</td>
      <td>https://www.example.co.kr/</td>
      <td>요청사항입니다.</td>
    </tr>
  ));
  const currenPageData = data.slice((page - 1) * pageSize, page * pageSize);
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className={styles["admin-container"]}>
          <h2>문의내역</h2>

          {/* 필터 및 검색 영역 */}
          <div className={styles["filter-search-container"]}>
            <select className="form-select" aria-label="문의 유형 선택">
              <option value="">문의자</option>
              <option value="name">이름</option>
              <option value="ip">IP</option>
            </select>
            <input
              type="text"
              // className="form-control w-50"
              placeholder="검색어를 입력하세요."
            />
          </div>

          {/* 테이블 */}
          <div>
            <table className={styles["table"]}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>문의 IP</th>
                  <th>문의 시간</th>
                  <th>기기</th>
                  <th>이름</th>
                  <th>연락처</th>
                  <th>이메일</th>
                  <th>광고 유형</th>
                  <th>광고 예산</th>
                  <th>홈페이지 URL</th>
                  <th>요청사항</th>
                </tr>
              </thead>
              <tbody>
                {/* 예시 데이터 */}
                {currenPageData}
              </tbody>
            </table>
          </div>
          <Pagination
            page={page}
            totalCount={10}
            setPage={setPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
