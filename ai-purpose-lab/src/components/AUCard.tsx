import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  
  export function ExampleCard() {
    return (
        <Card className="w-full max-w-md bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-none shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 
                      bg-[length:300%_300%] animate-gradient-flow opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 z-0 rounded-2xl" />
          <CardHeader>
            <CardDescription className="text-blue-900">Dành cho</CardDescription>
            <CardTitle className="text-blue-700">
              Cá nhân & doanh nghiệp mới bắt đầu
            </CardTitle>
          </CardHeader>
    
          <CardContent>
            <p className="text-sm text-blue-800">
            • Trò chuyện AI cơ bản, giải đáp thắc mắc về trí tuệ AI </p>
            <p className="text-sm text-blue-800">
            • Đánh giá nhanh nhu cầu và khả năng ứng dụng </p>
            <p className="text-sm text-blue-800">
            • Tư vấn định hướng, thử nghiệm các công cụ
            </p>
          </CardContent>
    
          <CardFooter className="justify-end">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">Tìm hiểu thêm</Button>
          </CardFooter>
        </Card>
      )
    }