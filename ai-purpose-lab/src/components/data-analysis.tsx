export default function DataAnalysis() {
  return (
    <div className="mb-6">
      <div className="flex gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-700 flex items-center justify-center rounded-sm">
          <div className="text-white text-xs font-bold">AI</div>
        </div>
        <div className="flex-1">
          <div className="font-bold mb-1">2:03 PM, 15 Nov</div>

          <div className="space-y-4">
            <p className="font-medium">Phân tích chung khuynh hướng đánh giá:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tổng quan cảm xúc (tích cực, tiêu cực, trung lập)</li>
              <li>Các yếu tố ảnh hưởng đến đánh giá (chất lượng đồ ăn, dịch vụ, giá cả, không gian, v.v.)</li>
              <li>Xu hướng trong đánh giá (các vấn đề thường gặp hoặc điểm mạnh nổi bật)</li>
              <li>Gợi ý cải thiện (dựa trên trải nghiệm khách hàng)</li>
            </ul>

            <p className="font-medium">Phân tích chi tiết các độ đánh giá:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Điểm mạnh của nhà hàng</li>
              <li>"Friendly" (24 lần) → Nhân viên thân thiện, dịch vụ tốt</li>
              <li>"Delicious" (23 lần) → Món ăn ngon</li>
              <li>"Fresh" (20 lần) → Hải sản tươi ngon, chất lượng tốt</li>
              <li>"Love" (16 lần), "Fantastic" (12 lần) → Khách hàng yêu thích không gian, đồ ăn</li>
              <li>Điểm cần cải thiện:</li>
              <li>
                "Busy" (18 lần), "Noisy" (15 lần), "Crowded" (10 lần) → Một số khách hàng có trải nghiệm không tốt
              </li>
              <li>"Disappointed" (14 lần) → Kỳ vọng không được đáp ứng</li>
              <li>"Slow" (11 lần) → Phần ăn đợi vụ chậm</li>
            </ul>

            <p className="text-gray-700">
              Nhìn vậy, nhà hàng của bạn được đánh giá cao về chất lượng món ăn và thái độ nhân viên, nhưng cần khắc
              phục về tốc độ phục vụ và đảm bảo chất lượng ổn định để tránh gây thất vọng.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

