export const formatCurrency = (amount: number | undefined) => {
    if(!amount) return;
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
  };
  

export function formatDate(date: Date): string {
    const day = date.getDate(); // Lấy ngày (1-31)
    const month = date.getMonth() + 1; // Lấy tháng (0-11) nên phải +1
    const year = date.getFullYear() % 100; // Lấy 2 số cuối của năm
  
    return `${day}-${month}-${year}`;
  }