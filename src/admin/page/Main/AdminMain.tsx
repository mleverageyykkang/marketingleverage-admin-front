import React, { useState } from "react";
import styles from "./AdminMain.module.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "../../components/Pagination";
const AdminMain: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 15;
  const data = Array.from({ length: 50 }, (_, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>2025-01-01</td>
      <td>12:34</td>
      <td>홍길동</td>
      <td>팀장</td>
      <td>ABC 회사</td>
      <td>010-1234-5678</td>
      <td>example@example.com</td>
      <td>디스플레이 광고</td>
      <td>500만 원</td>
      <td>www.example.com</td>
      <td>문의 내용</td>
      <td>IT</td>
      <td>추가 메모</td>
      <td>O</td>
      <td>O</td>
      <td>X</td>
      <td>내방</td>
      <td>O</td>
      <td>네이버</td>
      <td>디스플레이</td>
      <td>긍정</td>
      <td>수주</td>
      <td>GPT 분석 결과</td>
      <td>123.456.789</td>
      <td>검색 키워드</td>
      <td>PC</td>
      <td>네이버</td>
      <td>상세</td>
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
              placeholder="검색어를 입력하세요."
            />
          </div>

          {/* 테이블 */}
          <div className={styles["table-container"]}>
            <table className={styles["table"]}>
              <thead>
                <tr>
                  <th colSpan={3}>자동</th>
                  <th colSpan={9}>광고주 입력</th>
                  <th colSpan={12}>마케터 입력</th>
                  <th colSpan={4}>자동</th>
                  <th colSpan={1}>마케터</th>
                </tr>
                <tr>
                  <th>순서</th>
                  <th>문의일자</th>
                  <th>문의시간</th>
                  <th>성함</th>
                  <th>직급</th>
                  <th>업체명</th>
                  <th>연락처</th>
                  <th>이메일</th>
                  <th>광고유형</th>
                  <th>광고예산</th>
                  <th>홈페이지 URL</th>
                  <th>문의내용</th>
                  <th>업종</th>
                  <th>메모</th>
                  <th>카톡(문자) 개설(必)</th>
                  <th>메일링 회신(必)</th>
                  <th>미팅 여부[ O / X ]</th>
                  <th>[ 내방 / 외근 ]</th>
                  <th>마레솔루션 제안 [ O / X ]</th>
                  <th>매체사 제안</th>
                  <th>광고유형 제안</th>
                  <th>진행여부(긍정/부정)</th>
                  <th>최종 [ 수주 / 대기 / 실패 ]</th>
                  <th>원인/결과 분석 [ GPT 활용 ] </th>
                  <th>IP 주소</th>
                  <th>전환키워드</th>
                  <th>PC/MO</th>
                  <th>매체</th>
                  <th>상세</th>
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
            totalCount={data.length}
            setPage={setPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
