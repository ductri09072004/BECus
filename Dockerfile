# Chọn image cơ sở
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng ứng dụng (nếu cần)
EXPOSE 3001

# Chạy ứng dụng
CMD [ "node", "index.mjs" ]
