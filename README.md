**useEffect**
Chạy sau khi component được rerender.
Tương tự cả 3 hàm didMount, didUpdate và willUnmount bên Class component.

**Cây thư mục**
node_modules: Các thư viện.
public: Lưu các file public
src:
    customize: Lưu các custom hook.
        fetch.js: hook fetch - dùng để lấy data từ API truyền vào.
    views:
        Navigation: Component thanh Navigation.
        Population: Component Population.
        TODO: Component TODO app.
    App.css:
    App.js:
    index.css:
    index.js:
    logo.svg:
    reportWebVitals.js: Kiểm tra hiệu năng trang web online.
.gitignore: Ghi các file/folder không đẩy lên github.
package-lock.json: Ghi chi tiết các dependencies khi cài đặt các thư viện.
package.json: Khai báo các thư viện.