export function formatDate(date) {
  const validDate = new Date(date);

  // 날짜가 유효하지 않으면 기본 날짜를 설정하거나 에러 핸들링
  if (isNaN(validDate)) {
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(validDate);
}
