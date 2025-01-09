import React, { useState } from "react";
import styles from "./AdminMain.module.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "../../components/Pagination";
import dayjs from "dayjs";
const routes = [
  { path: "/admin/main", name: "문의내역" },
  { path: "/admin/settings", name: "설정" },
];
const data: any = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  inquiryDate: "2025-01-01",
  inquiryTime: "12:34",
  name: "홍길동",
  position: "팀장",
  company: "ABC 회사",
  phone: "010-1234-5678",
  email: "example@example.com",
  adType: "디스플레이 광고",
  budget: 5000000,
  website: "www.example.com",
  inquiryContent: "문의 내용",
  industry: "IT",
  memo: "추가 메모",
  kakaoOpened: "O",
  emailReply: "O",
  meeting: "X",
  visitType: "내방",
  mareProposal: "O",
  mediaProposal: "네이버",
  adProposal: "디스플레이",
  progress: "긍정",
  finalResult: "수주",
  gptAnalysis: "GPT 분석 결과",
  ip: "123.456.789",
  keywords: "검색 키워드",
  device: "PC",
  media: "네이버",
  detail: "상세",
}));

const AdminMain: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 15;
  const currenPageData = data.slice((page - 1) * pageSize, page * pageSize);
  const [draggedColumnIndex, setDraggedColumnIndex] = useState<number | null>(
    null
  );
  // group key-value를 통해서 이동 제한한
  const [columns, setColumns] = useState([
    { id: "id", label: "순서", group: "auto" },
    { id: "inquiryDate", label: "문의일자", group: "auto" },
    { id: "inquiryTime", label: "문의시간", group: "auto" },
    { id: "name", label: "성함", group: "advertiser" },
    { id: "position", label: "직급", group: "advertiser" },
    { id: "company", label: "업체명", group: "advertiser" },
    { id: "phone", label: "연락처", group: "advertiser" },
    { id: "email", label: "이메일", group: "advertiser" },
    { id: "adType", label: "광고유형", group: "advertiser" },
    { id: "budget", label: "광고예산", group: "advertiser" },
    { id: "website", label: "홈페이지URL", group: "advertiser" },
    { id: "inquiryContent", label: "문의내용", group: "advertiser" },
    { id: "industry", label: "업종", group: "marketer" },
    { id: "memo", label: "메모", group: "marketer" },
    { id: "kakaoOpened", label: "카톡(문자) 개설(必)", group: "marketer" },
    { id: "emailReply", label: "메일링 회신(必)", group: "marketer" },
    { id: "meeting", label: "미팅 여부[ O / X ]", group: "marketer" },
    { id: "visitType", label: "[ 내방 / 외근 ]", group: "marketer" },
    {
      id: "mareProposal",
      label: "마레솔루션 제안 [ O / X ]	",
      group: "marketer",
    },
    { id: "mediaProposal", label: "매체사 제안", group: "marketer" },
    { id: "adProposal", label: "광고유형제안", group: "marketer" },
    { id: "progress", label: "	진행여부(긍정/부정)", group: "marketer" },
    {
      id: "finalResult",
      label: "최종 [ 수주 / 대기 / 실패 ]",
      group: "marketer",
    },
    {
      id: "gptAnalysis",
      label: "원인/결과 분석 [ GPT 활용 ]",
      group: "marketer",
    },
    { id: "ip", label: "IP 주소", group: "auto2" },
    { id: "keywords", label: "전환키워드", group: "auto2" },
    { id: "device", label: "PC/MO", group: "auto2" },
    { id: "media", label: "매체", group: "auto2" },
    { id: "detail", label: "상세", group: "marketer2" },
  ]);

  // HTML5 드래그앤드롭 방식 : Handle drag start
  const handleDragStart = (index: number) => {
    setDraggedColumnIndex(index);
  };

  // HTML5 드래그앤드롭 방식 : Handle drag over
  const handleDragOver = (e: React.DragEvent<HTMLTableCellElement>) => {
    e.preventDefault(); // Prevent default behavior to allow drop
  };

  // HTML5 드래그앤드롭 방식 : Handle drop
  const handleDrop = (index: number) => {
    if (
      draggedColumnIndex === null ||
      draggedColumnIndex === index ||
      columns[draggedColumnIndex].group !== columns[index].group // 그룹내에서만 이동동
    )
      return;

    const newColumns = [...columns];
    const [draggedColumn] = newColumns.splice(draggedColumnIndex, 1);
    newColumns.splice(index, 0, draggedColumn);

    setColumns(newColumns);
    setDraggedColumnIndex(null); // Reset dragged index
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar routes={routes} />
        <div className={styles["admin-container"]}>
          <h2>문의내역</h2>

          {/* 필터 및 검색 영역 */}
          <div className={styles["filter-search-container"]}>
            <select className="form-select" aria-label="문의 유형 선택">
              <option value="">문의자</option>
              <option value="name">이름</option>
              <option value="ip">IP</option>
            </select>
            <input type="text" placeholder="검색어를 입력하세요." />
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
                  {columns.map((column, index) => (
                    <th
                      key={column.id}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(index)}
                      style={{
                        cursor: "grab",
                        backgroundColor: "#f8f9fa",
                        textAlign: "center",
                      }}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 예시 데이터 */}
                {currenPageData.map((row: any, rowIndex: number) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td
                        key={`cell-${rowIndex}-${column.id}`}
                        style={{ textAlign: "center" }}
                      >
                        {column.id === "inquiryDate"
                          ? row[column.id]
                            ? dayjs(row[column.id]).format("YYYY-MM-DD")
                            : "-"
                          : row[column.id]?.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                ))}
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
